import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { View, ActivityIndicator } from 'react-native';
import general from '../styles/general';

import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';
import styles from '../pages/signIn/style';

function Routes() {
    
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return(
            <View style={general.containerCenter}>
                <ActivityIndicator size="large" color="#1F1F1F"/>
            </View>
        )
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;