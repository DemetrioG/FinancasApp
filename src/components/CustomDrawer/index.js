import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import general from '../../styles/general';
import styles from './style';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {

    const { user, signOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <View style={general.containerCenter}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{width: 85, height: 85}}
                    resizeMode="contain"
                />
                <Text style={styles.userText}>Bem Vindo</Text>
                <Text style={[styles.userText, {fontWeight: 'bold'}]}>{user && user.nome}</Text>
            </View>

            <DrawerItemList {...props}/>
            <DrawerItem
                {...props}
                label="Sair"
                inactiveBackgroundColor="#c62c36"
                onPress={ () => signOut() }
            />
        </DrawerContentScrollView>
    );
}