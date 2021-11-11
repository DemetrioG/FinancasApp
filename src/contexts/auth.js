import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [user, setUser] = useState({
        nome: 'Gabriel',
        uid: '23424234324242'
    });

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;