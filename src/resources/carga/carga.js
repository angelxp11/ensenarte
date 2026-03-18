import logo from '../images/logonobackground.png';
import './carga.css';

function Carga() {
  return (
    <div className="loading-screen">
      <div className="loader-wrcargaer">
        <div className="loader-ring" />
        <div className="loader-inner">
          <img src={logo} alt="EnsenArte logo" className="loader-logo" />
        </div>
      </div>
    </div>
  );
}

export default Carga;
