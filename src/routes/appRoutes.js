import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import general from "../styles/general";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return(
        <AppDrawer.Navigator
            drawerContent={ (props) => <CustomDrawer {...props}/>}
            drawerStyle={general.background}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#00b94a',
                inactiveBackgroundColor: '#2b2b2b',
                inactiveTintColor: '#d1d1d1',
                itemStyle: {
                    marginVertical: 5,
                }
            }}
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Perfil" component={Profile}/>
            <AppDrawer.Screen name="Registrar" component={Register}/>
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;