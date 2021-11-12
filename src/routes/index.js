import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';

function Routes() {
    
    const { signed } = useContext(AuthContext);

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;