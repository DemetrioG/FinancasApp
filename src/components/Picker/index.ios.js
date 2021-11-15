import React from 'react';
import { View } from 'react-native';
import { Picker as PickerInput } from '@react-native-picker/picker';
import styles from './styles';
import general from '../../styles/general';

export default function Picker({ onChange, type }) {
    return (
        <PickerInput
            style={general.input}
            selectedValue={type}
            onValueChange={ (v) => onChange(v)}
        >
            <PickerInput.Item label="Receita" value="receita"/>
            <PickerInput.Item label="Despesa" value="despesa"/>
        </PickerInput>
    );
}