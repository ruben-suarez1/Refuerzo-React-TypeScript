import Contador from "./components/Contador"
import Funciones from "./components/Funciones"
import ObjetosLiterales from "./components/ObjetosLiterales"
import TiposBasicos from "./components/TiposBasicos"

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
    </div>
  )
}

export default App
