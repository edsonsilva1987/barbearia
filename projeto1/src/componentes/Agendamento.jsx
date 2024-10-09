
//import './App.css'
//import Button from "react"
import { Link } from "react-router-dom";

function Fotos() {


  return (
    <div>
      <Link to={"/"}  className="paragrafo">INICIO</Link><br/>
      <p className="paragrafo">Data Disponível <input/></p>
      <p className="paragrafo">Horario Disponível <input/></p>
      <button className="botao" >
      enviar
    </button>
    </div>
  )
};

export default Fotos;
