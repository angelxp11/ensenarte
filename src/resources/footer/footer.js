import React from 'react';
import './footer.css';
import logo from "./../images/logosinalto.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

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

        {/* Logo + descripción */}
        <div className="footer-col brand">
          <img src={logo} alt="EnsenArte logo" className="footer-logo" />
          <p>Aprende desde casa con programas convalidados y certificados.</p>

          {/* Redes sociales */}
          <div className="socials">
            <a href="https://www.facebook.com/EnsenarteOnline" target="_blank"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ensenarte.online" target="_blank"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@ensenarte.online" target="_blank"><FaTiktok /></a>
            <a href="https://wa.me/573007714104" target="_blank"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Enlaces */}
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#cursos" onClick={(e) => { e.preventDefault(); scrollToSection('cursos'); }}>Cursos</a></li>
            <li><a href="#preguntas" onClick={(e) => { e.preventDefault(); scrollToSection('preguntas'); }}>Preguntas frecuentes</a></li>
            <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollToSection('testimonios'); }}>Testimonios</a></li>
            <li><a href="#noticias" onClick={(e) => { e.preventDefault(); scrollToSection('noticias'); }}>Noticias</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>Email: info@ensenarte.com</p>
          <p>Tel: <a href="https://wa.me/573007714104" target="_blank" className="phone-button">+57 300 771 4104</a></p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EnsenArte. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;