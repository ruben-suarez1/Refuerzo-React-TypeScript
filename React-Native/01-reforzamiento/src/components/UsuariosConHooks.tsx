
import useUsuarios from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';
const UsuariosConHooks = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    const renderItem = ( {id, email, first_name, last_name, avatar}: Usuario ) => {
        return (
            <tr key={ id.toString() }>
                <th>
                    <img 
                        src={ avatar } 
                        alt= { first_name } 
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </th>
                <th>{ first_name } { last_name }</th>
                <th>{ email }</th>
            </tr> 
        )
    }
    

  return (
    <>
      <h3>Usuarios con Hooks:</h3>

      <table className='table'>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody> 
            { usuarios.map( renderItem ) }
        </tbody>
      </table>


      <button 
      className='btn btn-primary m-2'
      onClick={ paginaAnterior } >
        Anterior
      </button>

      <button 
      className='btn btn-primary m-2'
      onClick={ paginaSiguiente } >
        Siguientes
      </button>
    </>
  )
}

export default UsuariosConHooks
