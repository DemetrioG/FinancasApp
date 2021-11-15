import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles'

export default function HistoricList({data}) {

    return (
        <View style={styles.viewList}>
            <View style={[styles.viewRD, {backgroundColor: data.tipo === 'despesa' ? '#c62c36' : '#00b94a'}]}>
                <Icon 
                    name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
                    color="#FFF" 
                    size={20}
                />
                <Text style={styles.txtRD}>{data.tipo}</Text>
            </View>
            <Text style={styles.txtSaldo}>R${data.valor}</Text>
        </View>
    );
}