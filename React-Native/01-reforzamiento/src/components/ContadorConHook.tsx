import useCounter from '../hooks/useCounter';

const ContadorConHook = () => {

  const { valor, acumular } = useCounter(100);

  return (
    <>
      <h3>Contador con Hooks: <small> { valor } </small></h3>

        <button className='btn btn-primary m-1' onClick={ () => acumular(1) }> +1 </button>
        <button className='btn btn-danger m-1' onClick={ () => acumular(-1) }> -1 </button>

    </>
  )
}

export default ContadorConHook
