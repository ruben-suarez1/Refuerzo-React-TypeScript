import { useState } from 'react';

const Contador = () => {

    const [valor, seTvalor] = useState(0);

    const acumular = ( numero: number ) => {
      seTvalor( valor + numero )
    }

  return (
    <>
      <h3>Contador: <small> { valor } </small></h3>

        <button className='btn btn-primary m-1' onClick={ () => acumular(1) }> +1 </button>
        <button className='btn btn-danger m-1' onClick={ () => acumular(-1) }> -1 </button>

    </>
  )
}

export default Contador
