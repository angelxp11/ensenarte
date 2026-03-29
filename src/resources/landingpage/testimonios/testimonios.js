
import React from 'react';
import './testimonios.css';

import testomonio1 from '../../images/testimonio1.jpg';
import testimonio2 from '../../images/testimonio2.jpg';
import testimonio3 from '../../images/testimonio3.jpg'
import { useState, useEffect } from 'react';

const testimonials = [
  { name: 'Carlos Medina', role: 'Estudiante', quote: 'Agradezco a Ensenarte por brindarme las herramientas y el acompañamiento necesarios para cumplir mi meta de convertirme en técnico veterinario.', image: testomonio1 },
  { name: 'Rosalba Pérez', role: 'Estudiante', quote: 'Excelente acompañamiento, materiales prácticos y un equipo profesor que hace la diferencia.', image: testimonio2 },
  { name: 'Mariana Ruiz', role: 'Estudiante', quote: 'Gracias a Ensenarte por darme la oportunidad de estudiar a la distancia y hacer posible que continúe con mi formación.', image: testimonio3 },

  /*
  { name: 'Julián Torres', role: 'Estudiante', quote: 'Una experiencia muy completa, aprendí a mi ritmo y con el apoyo constante de los docentes.', image: null },
  { name: 'Andrea López', role: 'Estudiante', quote: 'Gracias a Ensenarte hoy estoy más cerca de cumplir mis sueños profesionales.', image: null },
  { name: 'Luis Gómez', role: 'Estudiante', quote: 'La modalidad virtual fue perfecta para mí, pude estudiar sin descuidar mi trabajo.', image: null },
  { name: 'Camila Herrera', role: 'Estudiante', quote: 'Los contenidos son claros, prácticos y muy bien explicados. Lo recomiendo totalmente.', image: null },
  { name: 'Diego Ramírez', role: 'Estudiante', quote: 'Estudiar aquí fue una de las mejores decisiones que he tomado.', image: null },
  { name: 'Paula Sánchez', role: 'Estudiante', quote: 'Gracias a Ensenarte por darme una segunda oportunidad de estudiar y salir adelante.', image: null },
  { name: 'Jorge Castillo', role: 'Estudiante', quote: 'El acompañamiento es constante y siempre están dispuestos a ayudarte.', image: null },
  { name: 'Laura Martínez', role: 'Estudiante', quote: 'Pude avanzar rápido y sin complicaciones, todo muy bien organizado.', image: null },
  { name: 'Andrés Moreno', role: 'Estudiante', quote: 'Una excelente opción para quienes queremos estudiar desde casa.', image: null },
  { name: 'Natalia Rojas', role: 'Estudiante', quote: 'Gracias a Ensenarte logré retomar mis estudios y creer nuevamente en mí.', image: null },
  { name: 'Felipe Castro', role: 'Estudiante', quote: 'Muy buena metodología, flexible y fácil de entender.', image: null },
  { name: 'Diana Vargas', role: 'Estudiante', quote: 'Recomiendo Ensenarte por su calidad educativa y compromiso con los estudiantes.', image: null }
  */
];



function Testimonios() {
  const [active, setActive] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const nextTestimonials = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
      setFadeClass('fade-in');
    }, 300);
  };

  const prevTestimonials = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
      setFadeClass('fade-in');
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonials();
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  const totalPages = Math.ceil(testimonials.length / 3);
  const currentPage = Math.floor(currentIndex / 3);
  return (
    <section className="testimonials-section section-animated">
      <div className="testimonials-container">
        <h2>Testimonios</h2>
        <p>Historias reales de estudiantes que transformaron su educación con nosotros.</p>
        <div className={`testimonial-grid ${fadeClass}`}>
          {visibleTestimonials.map((item, idx) => (
            <article
              key={currentIndex + idx}
              className="testimonial-card testimonial-card-img"
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === idx ? null : idx)}
              style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', border: '2px solid var(--deco-1)', padding: 0 }}
            >
              <img
                src={item.image || testimonio3}
                alt={`Testimonio ${item.name}`}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '14px',
                  transition: 'filter 0.3s',
                  filter: active === idx ? 'brightness(0.5)' : 'none'
                }}
              />
              <div
                className={`testimonial-overlay ${active === idx ? 'active' : ''}`}
              >
                <div className="quote-wrapper">
                  <p className="testimonial-quote">"{item.quote}"</p>
                </div>
                <div className="testimonial-info">
                  <h4>{item.name}</h4>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {testimonials.length > 3 && (
          <div className="carousel-controls">
            <button className="carousel-btn prev-btn" onClick={prevTestimonials}>‹ Anterior</button>
            <div className="carousel-indicators">
              {Array.from({ length: totalPages }, (_, i) => (
                <span
                  key={i}
                  className={`indicator ${i === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i * 3)}
                ></span>
              ))}
            </div>
            <button className="carousel-btn next-btn" onClick={nextTestimonials}>Siguiente ›</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonios;
