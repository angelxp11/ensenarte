import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Carga from './resources/carga/carga';
import Navbar from './resources/navbar/navbar';
import LandingPage from './resources/landingpage/landingpage';
import reportWebVitals from './reportWebVitals';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // Simula una carga de 2 segundos
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Carga />
      ) : (
        <>
          <Navbar />
          <LandingPage />
        </>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
