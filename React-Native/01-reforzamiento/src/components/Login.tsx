import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean,
    token: number | null,
    username: string,
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''

}

type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':

            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        
        case 'login' :
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 14455,
                nombre,
                username
                

            }

        default:
            return state;
    }
}

const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ 
                type: 'logout'
            })
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Ruben',
                username: 'Suarez'
            }
        })
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                    ? <div className="alert alert-success"> Autenticado como: { nombre } </div>
                    : <div className="alert alert-danger"> No autenticado </div>
            }

            {
                ( token ) 
                    ?
                    (<button className="btn btn-danger m-2" onClick={ logout }>Logout</button>)
                    :
                    (<button className="btn btn-primary m-2" onClick={ login }>Login</button>)
            }

        </>
    )
}

export default Login
