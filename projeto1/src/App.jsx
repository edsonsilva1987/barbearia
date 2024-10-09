
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './componentes/Inicio'
import Login from './componentes/Login'
import Agedamento from './componentes/Agendamento'
import Naodefinida from './componentes/Naodefinida'
import './App.css'
import MenuListComposition from './componentes/Menu'

 export default function App() {
  
  return (
    <div className=" co">
      <div className="fixo" >Seja Bem-Vindo</div>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Inicio/>}/>;
          <Route path='/login'  element={<Login/>}/>;
          <Route path='/Agendamento'  element={<Agedamento/>}/>;
          <Route path='/*' element={<Naodefinida/>}/>;
          <Route path='/menu' element={<MenuListComposition/>}/>;
        </Routes>
      </BrowserRouter>
    </div>
  )
}


