import React from 'react';
import './testimonios.css';

const testimonials = [
  { name: 'Laura Gómez', role: 'Estudiante', quote: 'Gracias a EnsenArte convalidé mi primaria en 5 meses y obtuve mi certificado SNIES.' },
  { name: 'Carlos Medina', role: 'Profesional', quote: 'Excelente acompañamiento, materiales prácticos y un equipo profesor que hace la diferencia.' },
  { name: 'Mariana Ruiz', role: 'Trabajadora', quote: 'Pude aprobar el bachillerato trabajando a tiempo parcial, fue un cambio total de vida.' }
];

function Testimonios() {
  return (
    <section className="testimonials-section section-animated">
      <div className="testimonials-container">
        <h2>Testimonios</h2>
        <p>Historias reales de estudiantes que transformaron su educación con nosotros.</p>
        <div className="testimonial-grid">
          {testimonials.map((item, idx) => (
            <article key={idx} className="testimonial-card">
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
