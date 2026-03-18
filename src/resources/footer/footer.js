import React from 'react';
import './footer.css';

function Footer() {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>EnsenArte</h4>
          <p>Aprende desde casa con programas ya convalidados y certificados.</p>
        </div>
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#cursos" onClick={(e) => { e.preventDefault(); scrollToSection('cursos'); }}>Cursos</a></li>
            <li><a href="#preguntas" onClick={(e) => { e.preventDefault(); scrollToSection('preguntas'); }}>Preguntas frecuentes</a></li>
            <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollToSection('testimonios'); }}>Testimonios</a></li>
            <li><a href="#noticias" onClick={(e) => { e.preventDefault(); scrollToSection('noticias'); }}>Noticias</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>Email: info@ensenarte.com</p>
          <p>Tel: +57 300 000 0000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EnsenArte. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
