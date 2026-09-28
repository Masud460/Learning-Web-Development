import { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const saved = JSON.parse(localStorage.getItem('userData'));
        return saved ? saved : null;
    });

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || '/dashboard';

    const login = (userData) => {
        setUser(userData)
        navigate(from, {replace: false})
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem('userData')
        window.location.reload(
            
        )
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };