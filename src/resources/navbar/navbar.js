import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import './navbar.css';
import logo from '../images/logosinalto.png';

function Navbar({ onOpenFormulario }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: 'Inicio', href: '#' },
    { label: 'Campus Virtual', href: 'https://ensenarteonline.com.co/moodle/login/index.php' },
    { label: 'Cartera', href: 'https://angelxp11.github.io/cartera/' },
  ];

  return (
    <header className="navbar">
      {/* Logo - visible en landscape */}
      <div className="navbar-brand">
        <a href="#" className="navbar-logo-wrapper" aria-label="EnsenArte Inicio" onClick={(e) => e.preventDefault()}>
          <img src={logo} alt="EnsenArte" className="navbar-logo" />
        </a>
      </div>

      {/* Navegación - visible en landscape */}
      <nav className="navbar-links-desktop" aria-label="Navegación principal">
        {items.map((item) => (
          <a key={item.href} className="navbar-item" href={item.href}>
            {item.label}
          </a>
        ))}
        <button className="navbar-item navbar-cta" type="button" onClick={() => onOpenFormulario?.()}>
          Más info
        </button>
      </nav>

      {/* Botón toggle - visible en portrait */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((cur) => !cur)}
        aria-expanded={menuOpen}
        aria-label="Mostrar menú"
      >
        <TiThMenu size={28} color="white" />
      </button>

      {/* Menú desplegable - visible en portrait */}
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-menu-header">
          <a href="#" className="navbar-logo-wrapper" aria-label="EnsenArte Inicio" onClick={(e) => { e.preventDefault(); setMenuOpen(false); }}>
            <img src={logo} alt="EnsenArte" className="navbar-menu-logo" />
          </a>
        </div>

        <nav className="navbar-links" aria-label="Navegación principal">
          {items.map((item) => (
            <a key={item.href} className="navbar-item" href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <button className="navbar-item navbar-cta" type="button" onClick={() => { setMenuOpen(false); onOpenFormulario?.(); }}>
            Más info
          </button>
        </nav>
      </div>

      {/* Overlay - visible en portrait */}
      <div className={`navbar-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
    </header>
  );
}

export default Navbar;
