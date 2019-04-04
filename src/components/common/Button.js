import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};
const styles = {
    buttonStyle: {
        backgroundColor: '#2d6e6b',
        borderRadius: 100,
        borderWidth: 1,
        width: 200,
        hight: 40,
        borderColor: '#f8f8f8',
        marginLeft: 5,
        marginTop: 200,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#f8f8f8',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};
export  {Button};
