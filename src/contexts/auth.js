import React, { useState, createContext } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [user, setUser] = useState(null);

    //Cadastro do usuário
    async function signUp(email, password, name) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (v) => {
            let uid = v.user.uid;
            await firebase.database().ref('users').child(uid).set({
                nome: name,
                saldo: 0,
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: name,
                    email: v.user.email,
                };
                setUser(data);
            })
        })
    }

    return (
        // !! passa o retorno da state para bool
        <AuthContext.Provider value={{ signed: !!user , user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;