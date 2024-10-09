//import './App.css'
import { Link } from "react-router-dom";


 export default function Inicial() {
  return (
    <div  className="paragrafo">
    <Link to={"/login"}  >voltar para login</Link><br/>
    <Link to={"/Agendamento"}  >voltar para agendamento</Link><br/>
    </div>
  )
}
