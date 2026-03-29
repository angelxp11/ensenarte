import React from 'react';
import './noticias.css';

const news = [
  { title: 'Apertura de inscripción 2026', date: 'Marzo 2026', text: 'Ya están abiertas las inscripciones para los programas de convalidación primaria y bachillerato. Plazas limitadas.' },
  { title: 'Nuevos cursos de idiomas con certificación internacional', date: 'Febrero 2026', text: 'Lanzamos cursos de inglés, francés y portugués con certificación internacional y horarios flexibles.' },
  { title: 'Financiación mejorada', date: 'Enero 2026', text: 'Becas de hasta el 85 % para estudiantes nuevos y convenios empresariales con planes corporativos.' }
];

function Noticias() {
  return (
    <section className="news-section section-animated">
      <div className="news-container">
        <h2 className="news-title">Noticias</h2>
        <p>Mantente al día con las últimas novedades en formación y oportunidades.</p>
        <div className="news-list">
          {news.map((item, idx) => (
            <article key={idx} className="news-item">
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Noticias;
