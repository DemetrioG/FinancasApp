import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import general from '../../styles/general';

export default function Picker({ onChange, type }) {
    return (
        <View style={[general.input, styles.paddingPicker]}>

            <RNPickerSelect
                style={{
                    inputAndroid: {
                        color: '#d1d1d1',
                    }
                }}
                placeholder={{
                    label: 'Selecione o tipo',
                    color: '#2b2b2b',
                    value: null,
                }}
                value={type}
                onValueChange={(v) => onChange(v) }
                items={[
                    {label: 'Receita', value: 'receita'},
                    {label: 'Despesa', value: 'despesa'}
                ]}
            />
        </View>
    );
}