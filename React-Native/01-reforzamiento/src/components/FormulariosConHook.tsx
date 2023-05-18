import useForm from '../hooks/useForm';

const FormulariosConHook = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    });

    return (
        <>
            <h3>Formularios Con Hooks</h3>
            <input
                type="text"
                className="form-control mb-5"
                placeholder="Email"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />

            <input
                type="text"
                className="form-control mb-5"
                placeholder="Email"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default FormulariosConHook
