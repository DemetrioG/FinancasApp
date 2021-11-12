import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signup';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{headerShown: false}}
            />
            <AuthStack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{
                    headerStyle: {
                        backgroundColor: '#1f1f1f',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a',
                    },
                    headerTintColor: '#d1d1d1',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar',
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;