import Contador from "./components/Contador"
import ContadorConHook from "./components/ContadorConHook"
import Formularios from "./components/Formularios"
import FormulariosConHook from "./components/FormulariosConHook"
import Funciones from "./components/Funciones"
import Login from "./components/Login"
import ObjetosLiterales from "./components/ObjetosLiterales"
import TiposBasicos from "./components/TiposBasicos"
import Usuarios from "./components/Usuarios"
import UsuariosConHooks from "./components/UsuariosConHooks"

const App = () => {
  return (
    <div>
      <h1>Introduccion React +  TypeScript</h1>
      <hr />
      < TiposBasicos />
      <hr />
      < ObjetosLiterales />
      <hr />
      < Funciones />
      <hr />
      < Contador />
      <hr />
      < ContadorConHook />
      <hr />
      < Login />
      <hr />
      < Usuarios />
      <hr />
      < UsuariosConHooks />
      <hr />
      < Formularios />
      <hr />
      < FormulariosConHook />
    </div>
  )
}

export default App
