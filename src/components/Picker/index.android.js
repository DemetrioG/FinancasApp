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

                }}
                placeholder={{
                    label: 'Selecione o tipo',
                    color: '#2b2b2b',
                    value: null,
                }}
                value={type}
                onValueChange={(v) => onChange(v) }
                items={[
                    {label: 'Receita', value: 'receita', inputLabel: '#d1d1d1'},
                    {label: 'Despesa', value: 'despesa', inputLabel: '#d1d1d1'}
                ]}
            />
        </View>
    );
}