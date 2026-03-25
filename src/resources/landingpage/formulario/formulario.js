import React, { useState, useEffect } from 'react';
import './formulario.css';
import { db } from '../../../server/api';
import { doc, setDoc } from 'firebase/firestore';

const getTodayDocId = () => {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  return `${dd}_${mm}_${yyyy}`;
};

const formatPhone = (digits) => {
  const d = digits.replace(/\D/g, '').slice(0, 10);
  if (!d) return '';
  const part1 = d.slice(0, 3);
  const part2 = d.slice(3, 6);
  const part3 = d.slice(6, 8);
  const part4 = d.slice(8, 10);
  const sections = [part1, part2, part3, part4].filter(Boolean);
  return sections.join(' ');
};

const removeSpaces = (value) => value.replace(/\s+/g, '');

const Formulario = ({ openForm = false, onClose = () => {} }) => {
  const [open, setOpen] = useState(openForm);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    setOpen(openForm);
  }, [openForm]);

  const handleToggle = () => {
    setOpen((prevOpen) => {
      const next = !prevOpen;
      if (!next) onClose();
      return next;
    });
  };

  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onNombreChange = (event) => {
    const value = event.target.value.toUpperCase();
    setNombre(value);
  };

  const onCorreoChange = (event) => {
    const value = event.target.value.toLowerCase();
    setCorreo(value);
  };

  const onTelefonoChange = (event) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 10);
    setTelefono(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const nombreTrim = nombre.trim();
    const telefonoRaw = telefono.replace(/\D/g, '');

    if (!nombreTrim) {
      setError('El nombre completo es obligatorio.');
      return;
    }

    if (telefonoRaw.length !== 10) {
      setError('El número de teléfono debe tener exactamente 10 dígitos.');
      return;
    }

    const docId = getTodayDocId();
    const storageKey = `INTERESADOS_${docId}`;

    let current = {};
    try {
      current = JSON.parse(localStorage.getItem(storageKey) || '{}');
      if (typeof current !== 'object' || current === null) {
        current = {};
      }
    } catch (e) {
      current = {};
    }

    const userKey = `user_${Date.now()}`;
    const userData = {
      nombre: nombreTrim,
      correo: correo.trim(),
      telefono: telefonoRaw,
      creado: new Date().toISOString(),
    };

    current[userKey] = userData;
    localStorage.setItem(storageKey, JSON.stringify(current));

    // Guarda en Firestore con campo mapa por usuario y docId por día
    const docRef = doc(db, 'INTERESADOS', docId);
    setDoc(docRef, { [userKey]: userData }, { merge: true })
      .then(() => {
        console.log('Firestore INTERESADOS guardado', docId, userKey, userData);
      })
      .catch((err) => {
        console.error('Error guardando en Firestore:', err);
        setError('No se pudo guardar en la nube. Intenta nuevamente.');
      });

    // Mensaje de éxito y cierre automático en 2 segundos
    setSuccess('Gracias por tu interés. En breves te contactaremos.');
    setNombre('');
    setCorreo('');
    setTelefono('');

    setTimeout(() => {
      setOpen(false);
      onClose();
      setSuccess('');
    }, 2000);

    /*
      Si quieres guardar en Firestore, cambia la parte anterior por algo así:
      import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
      const db = getFirestore();
      const docRef = doc(db, 'INTERESADOS', docId);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.exists() ? docSnap.data() : {};
      const update = { ...docData, [userKey]: userData };
      await setDoc(docRef, update, { merge: true });
    */
  };

  if (!open) {
    return null;
  }

  return (
    <div className="formulario-overlay" onClick={() => { setOpen(false); onClose(); }}>
      <div className="formulario-modal" onClick={(e) => e.stopPropagation()}>
        <button className="formulario-close-btn" type="button" onClick={() => { setOpen(false); onClose(); }}>
          ✕
        </button>

        <h3 className="formulario-modal-title">Únete a nuestra nueva comunidad</h3>
        <p className="formulario-modal-text">Mantente al tanto de nuestras novedades y ofertas especiales.</p>

        <form className="formulario-card" onSubmit={submitHandler} noValidate>
          <label className="formulario-label">
            Nombre completo *
            <input
              className="formulario-input"
              type="text"
              value={nombre}
              onChange={onNombreChange}
              placeholder="JUAN PEREZ"
              autoComplete="name"
              required
            />
          </label>

          <label className="formulario-label">
            Correo electrónico
            <input
              className="formulario-input"
              type="email"
              value={correo}
              onChange={onCorreoChange}
              placeholder="correo@dominio.com"
              autoComplete="email"
            />
          </label>

          <label className="formulario-label">
            Teléfono (10 dígitos) *
            <input
              className="formulario-input"
              type="text"
              value={formatPhone(telefono)}
              onChange={onTelefonoChange}
              placeholder="123 456 78 90"
              inputMode="numeric"
              maxLength={13}
              required
            />
          </label>

          {error && <p className="formulario-error">{error}</p>}
          {success && <p className="formulario-success">{success}</p>}

          <button type="submit" className="formulario-submit-btn">Enviar interés</button>
        </form>

        <div className="formulario-extra">
          <p>¿Ya formas parte? <strong>No te lo pierdas</strong>.</p>
          <a className="formulario-extra-link" href="https://ensenarteonline.com.co" target="_blank" rel="noreferrer">Visita nuestra comunidad</a>
        </div>

      </div>
    </div>
  );
};

export default Formulario;
