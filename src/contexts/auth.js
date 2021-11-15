import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    //Verificação se há usuário salvo no AsyncStorage, para cair direto na Home
    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('authUser');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
            }
            setLoading(false);
        }

        loadStorage();
    }, [])

    //Login do usuário
    async function signIn(email, password) {
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (v) => {
            let uid = v.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: v.user.email,
                }
                
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error) => {
            alert(error.code);
            setLoadingAuth(false);
        })
    }

    //Cadastro do usuário
    async function signUp(email, password, name) {
        setLoadingAuth(true);
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
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error) => {
            alert(error.code);
            setLoadingAuth(false);
        })
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('authUser', JSON.stringify(data));
    }

    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }

    return (
        // !! passa o retorno da state para bool
        <AuthContext.Provider value={{ signed: !!user , user, loading, loadingAuth, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;