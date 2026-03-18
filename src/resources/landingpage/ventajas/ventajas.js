import React from 'react';
import { FaSchool, FaGraduationCap, FaGlobe, FaTools, FaClipboardCheck } from 'react-icons/fa';
import './ventajas.css';

function Ventajas() {
  const courses = [
    {
      icon: FaSchool,
      title: 'Convalidación Primaria',
      subtitle: ['Convalidación Primaria', 'Convalidación Primaria', 'Convalidación Primaria'],
      description: 'Educación en solo 6 meses. Flexible, personalizada y a tu ritmo.',
      image: require('../../images/imagenfondo1.jpg'),
      showButton: false
    },
    {
      icon: FaGraduationCap,
      title: 'Convalidación Bachillerato',
      subtitle: ['Convalidación Bachillerato', 'Convalidación Bachillerato', 'Convalidación Bachillerato'],
      description: 'Educación en solo 6 meses. Flexible, personalizada y a tu ritmo.',
      image: require('../../images/imagenfondo2.jpg'),
      showButton: false
    },
    {
      icon: FaGlobe,
      title: 'Cursos de Idiomas',
      subtitle: ['Cursos de Idiomas', 'Cursos de Idiomas', 'Cursos de Idiomas'],
      description: 'Cursos de idiomas con certificación internacional. Desde nivel básico hasta avanzado.',
      image: require('../../images/logonobackground.png'),
      showButton: true,
      buttonText: 'Ver más'
    },
    {
      icon: FaTools,
      title: 'Cursos libres técnicos laborales',
      subtitle: ['Cursos libres enfocados en técnicos laborales', 'Cursos libres enfocados en técnicos laborales', 'Cursos libres enfocados en técnicos laborales'],
      description: 'Cursos Libres con Certificación. Formación complementaria en áreas clave de los programas.',
      image: require('../../images/logosinalto.png'),
      showButton: true,
      buttonText: 'Ver más'
    },
    {
      icon: FaClipboardCheck,
      title: 'Cursos Libres',
      subtitle: ['Cursos Libres', 'Cursos Libres', 'Cursos Libres'],
      description: 'Excel Básico, Excel Intermedio, Excel Avanzado, Pre-icfes virtual y presencial.',
      image: require('../../images/imagenfondo1.jpg'),
      showButton: true,
      buttonText: 'Ver más'
    }
  ];

  return (
    <section id="cursos" className="advantages-section section-animated">
      <div className="advantages-container">
        <h2 className="advantages-title">¿Por qué formarse con nosotros?</h2>
        <p className="advantages-subtitle-main">Formación práctica, rápida y 100% convalidadas para avanzar en tu carrera profesional desde el primer día.</p>
        <div className="advantages-grid">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <article key={index} className="advantage-card">
                <div className="advantage-card-content">
                  <div className="advantage-icon"><Icon size={32} /></div>
                  <h3>{course.title}</h3>
                  <div className="advantage-subtitle">
                    {course.subtitle.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                  <p className="advantage-description">{course.description}</p>
                  {course.showButton && (
                    <button className="advantage-button">{course.buttonText}</button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="advantages-extra">
          <p>Ver todos nuestros cursos, obtener más info.</p>
          <button className="advantages-see-all">Ver todos los cursos</button>
        </div>

        <div className="advantages-scholarship">
          <p><strong>Becas desde el 50% hasta el 85%</strong> ¡Únete hoy!</p>
          <p>Todos nuestros programas cuentan con registro SNIES y SIET ante el Ministerio de Educación Nacional.</p>
        </div>
      </div>
    </section>
  );
}

export default Ventajas;
