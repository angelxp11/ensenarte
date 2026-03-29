
import React from 'react';
import './testimonios.css';

import personaSerpiente from '../../images/testimonio.jpg';
import { useState } from 'react';

const testimonials = [
  { name: 'Laura Gómez', role: 'Estudiante', quote: 'Gracias a EnsenArte convalidé mi primaria en 5 meses y obtuve mi certificado SNIES.' },
  { name: 'Carlos Medina', role: 'Profesional', quote: 'Excelente acompañamiento, materiales prácticos y un equipo profesor que hace la diferencia.' },
  { name: 'Mariana Ruiz', role: 'Trabajadora', quote: 'Pude aprobar el bachillerato trabajando a tiempo parcial, fue un cambio total de vida.' }
];



function Testimonios() {
  const [active, setActive] = useState(null);
  return (
    <section className="testimonials-section section-animated">
      <div className="testimonials-container">
        <h2>Testimonios</h2>
        <p>Historias reales de estudiantes que transformaron su educación con nosotros.</p>
        <div className="testimonial-grid">
          {/* Card especial para Laura Gómez con imagen y overlay */}
          <article
            className="testimonial-card testimonial-card-img"
            onMouseEnter={() => setActive(0)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(active === 0 ? null : 0)}
            style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', border: '2px solid var(--deco-1)', padding: 0 }}
          >
            <img
              src={personaSerpiente}
              alt="Testimonio Laura Gómez"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '14px',
                transition: 'filter 0.3s',
                filter: active === 0 ? 'brightness(0.5)' : 'none'
              }}
            />
            <div
              className={`testimonial-overlay ${active === 0 ? 'active' : ''}`}
            >
              <div className="quote-wrapper">
                <p className="testimonial-quote">“Gracias a EnsenArte convalidé mi primaria en 5 meses y obtuve mi certificado SNIES.”</p>
              </div>
              <div className="testimonial-info">
                <h4>Laura Gómez</h4>
                <p className="testimonial-role">Estudiante</p>
              </div>
            </div>
          </article>
          {/* Resto de testimonios */}
          {testimonials.slice(1).map((item, idx) => (
            <article key={idx+1} className="testimonial-card">
              <p className="testimonial-quote">“{item.quote}”</p>
              <h4>{item.name}</h4>
              <p className="testimonial-role">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
