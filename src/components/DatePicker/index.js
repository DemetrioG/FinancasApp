import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react/cjs/react.development';
import styles from './styles';

export default function DatePicker({onClose, date, onChange}) {

    const [dateNow, setDateNow] = useState(new Date(date));

    return (
        <TouchableOpacity style={styles.datePickerContent}>
            {
                Platform.OS === 'ios' && (
                    <View>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButtonIOS}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            <DateTimePicker
                value={dateNow}
                mode="date"
                display="default"
                onChange={ (e, d) => {
                    const currentDate = d || dateNow;
                    setDateNow(currentDate);
                    onChange(currentDate);
                }}
                style={styles.datePicker}
            />
        </TouchableOpacity>
    );
}