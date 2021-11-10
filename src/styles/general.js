import { StyleSheet } from 'react-native';

const general = StyleSheet.create({
    container: {
        flex: 1
    },

    alignH: {
        alignItems: 'center',
    },

    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    background: {
        backgroundColor: '#1F1F1F',
    },

    input: {
        backgroundColor: '#2b2b2b',
        color: '#d1d1d1',
        textDecorationLine: 'none',
        fontSize: 16,
        width: 320,
        padding: 8,
        marginBottom: 20,
        borderRadius: 6,
    },

    button: {
        backgroundColor: '#00b94a',
        justifyContent: 'center',
        width: 320,
        height: 50,
        borderRadius: 6,
        marginBottom: 10,
    },

    btnText: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default general;