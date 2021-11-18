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
                    inputIOS: {
                        height: 40,
                        color: '#d1d1d1',
                        padding: 8,
                        fontSize: 16
                    }
                }}
                placeholder={{
                    label: 'Selecione o tipo',
                    color: '#2b2b2b',
                    value: null,
                }}
                value={type}
                onValueChange={(v) = onChange(v) }
                items={[
                    {label: 'Receita', value: 'receita'},
                    {label: 'Despesa', value: 'despesa'}
                ]}
            />
        </View>
    );
}