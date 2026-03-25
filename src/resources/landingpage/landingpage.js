import React, { useState, useEffect } from 'react';
import './landingpage.css';
import Ventajas from './ventajas/ventajas';
import Preguntas from './preguntasfrecuentes/preguntas';
import Formulario from './formulario/formulario';
import imagenfondo1 from '../images/imagenfondo1.jpg';
import imagenfondo2 from '../images/imagenfondo2.jpg';
import Testimonios from './testimonios/testimonios';
import Noticias from './noticias/noticias';
import Footer from '../footer/footer';

function LandingPage({ openFormulario, onSetOpenFormulario }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de imágenes con contenido - Reemplaza con tus imágenes de 1920x960 px
  const slides = [
    {
      image: imagenfondo1,
      title: 'Aprende A',
      description: 'Descubre técnicas innovadoras y desarrolla tu creatividad con nuestros cursos especializados en arte.',
      buttonText: 'Explorar Cursos',
      buttonLink: '#cursos'
    },
    {
      image: imagenfondo2,
      title: 'Crea sin Límites',
      description: 'Únete a una comunidad de artistas y comparte tus obras maestras con el mundo.',
      buttonText: 'Conocer Comunidad',
      buttonLink: '#comunidad'
    },
  ];

  // Auto-avance de slides - Bucle continuo sin intermitencia
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Mantener URL sin hash ni fragmentos
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Si no hay imágenes, mostrar placeholder
  if (slides.length === 0) {
    return (
      <section className="landingpage-container">
        <div className="landingpage-wrapper">
          <div className="landingpage-carousel">
            <div className="landingpage-empty-content">
              <div className="landingpage-empty-icon">📸</div>
              <p className="landingpage-empty-title">Galería de EnsenArte</p>
              <p className="landingpage-empty-text">
                Agrega tus imágenes (1920x960 px) a la carpeta resources/images
              </p>
              <p className="landingpage-empty-hint">
                Luego importa las imágenes en landingpage.js
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="landingpage-container">
        <div className="landingpage-wrapper">
          {/* Carrusel de imágenes */}
          <div className="landingpage-carousel">
            <div
            className="landingpage-slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="landingpage-slide"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                />

                {/* Contenido superpuesto */}
                <div className={`landingpage-slide-content ${index === currentSlide ? 'landingpage-content-active' : ''}`}>
                  <h2 className={`landingpage-slide-title ${index === currentSlide ? 'landingpage-title-active' : ''}`}>{slide.title}</h2>
                  <p className={`landingpage-slide-description ${index === currentSlide ? 'landingpage-description-active' : ''}`}>{slide.description}</p>
                  <a
                    href={slide.buttonLink}
                    className={`landingpage-slide-button ${index === currentSlide ? 'landingpage-button-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (slide.buttonLink && slide.buttonLink.startsWith('#')) {
                        scrollToSection(slide.buttonLink.slice(1));
                      }
                    }}
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>

            {/* Controles del carrusel - solo si hay múltiples slides */}
            {slides.length > 1 && (
              <>
                <button
                  className="landingpage-control landingpage-control-prev"
                  onClick={handlePrevSlide}
                  aria-label="Diapositiva anterior"
                >
                  ❮
                </button>
                <button
                  className="landingpage-control landingpage-control-next"
                  onClick={handleNextSlide}
                  aria-label="Siguiente diapositiva"
                >
                  ❯
                </button>

                {/* Indicadores de slides */}
                <div className="landingpage-indicators">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`landingpage-indicator ${
                        index === currentSlide ? 'landingpage-indicator-active' : ''
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Ir a diapositiva ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Sección de ventajas */}
      <Ventajas />

      {/* Sección de obtener más información */}
      <Formulario openForm={openFormulario} onClose={() => onSetOpenFormulario(false)} />

      {/* Preguntas frecuentes */}
      <div id="cursos" />
      <div id="preguntas" />
      <Preguntas />

      {/* Testimonios */}
      <div id="testimonios" />
      <Testimonios />

      {/* Noticias */}
      <div id="noticias" />
      <Noticias />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default LandingPage;
