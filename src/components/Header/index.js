import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
                <Icon name="menu" color="#d1d1d1" size={30}/>
            </TouchableOpacity>
        </View>
    );
}