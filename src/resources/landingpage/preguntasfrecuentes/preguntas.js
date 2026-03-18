import React, { useState } from 'react';
import './preguntas.css';

const faqs = [
  { q: '¿Qué es la convalidación de estudios?', a: 'Es el reconocimiento oficial de tus estudios previos para avanzar más rápido en el programa educacional.' },
  { q: '¿Cuánto dura el proceso?', a: 'En EnsenArte puedes completar la convalidación en apenas 6 meses con seguimiento personalizado.' },
  { q: '¿Cómo obtengo mi certificado?', a: 'Al finalizar el curso, recibes un certificado validado SNIES y SIET respaldado por el Ministerio de Educación.' },
  { q: '¿Hay financiamiento?', a: 'Sí, hay becas entre 50% y 85% y opciones de pago flexibles según tu perfil.' }
];

function Preguntas() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="questions-section section-animated">
      <div className="questions-container">
        <h2>Preguntas frecuentes</h2>
        <p>Resolvemos las dudas más comunes para que elijas el programa adecuado.</p>
        <div className="questions-list">
          {faqs.map((item, idx) => (
            <article key={idx} className="question-item">
              <button className="question-trigger" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                {item.q}
                <span>{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && <p className="question-answer">{item.a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Preguntas;
