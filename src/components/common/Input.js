import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
    return (
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{ label }</Text>
        <TextInput
        secureTextEntry={secureTextEntry} 
        placeholder={placeholder}
        autoCorrect={false}
        style={ styles.inputStyle }
        value={value}
        onChangeText={onChangeText}
        />
    </View>
    );
};

const styles={
    inputStyle:{
        color: '#f8f8f8',
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        fontWeight: 'bold',
        flex: 7
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 35,
        color: '#f8f8f8',
        alignSelf: 'center',
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center'
    }
};

export {Input};