import { useState } from "react"

const Formularios = () => {
    
    const [formulario, setFormulario] = useState({
        email: 'test@test.com',
        password: '123456'
    });

    const onChange = ( value: string, campo: string ) => {
        setFormulario({
            ...formulario,
            [campo]: value
        })
    }

    return (
        <>
            <h3>Formulario</h3>
            <input
                type="text"
                className="form-control mb-5"
                placeholder="Email"
                value={formulario.email}
                onChange={ ({ target }) => onChange( target.value, 'email' ) }
            />

            <input
                type="text"
                className="form-control mb-5"
                placeholder="Email"
                value={formulario.password}
                onChange={ ({ target }) => onChange( target.value, 'password' ) }
            />

            <code>
                <pre>
                    {JSON.stringify( formulario, null, 2 )}
                </pre>
            </code>
        </>
    )
}

export default Formularios
