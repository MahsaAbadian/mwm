import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const CongratsMsg = ()=>{
 return (
     <View style={styles.viewStyle}>
    <Text style= {styles.titleStyle} >CONGRATS!</Text>
    <Text style= {styles.textStyle} >YOU'VE COMPLETED</Text>
    <Text style= {styles.numStyle}>239</Text>
    <Text style = {styles.textStyle}>DAYS THIS YEAR</Text>
    </View>
 );
};

const styles ={
    titleStyle: {
        textAlign: 'center',
        color: '#f8f8f8',
        fontWeight: 'bold',
        fontSize: 40
    },
    numStyle:{
        textAlign: 'center',
        color: '#f8f8f8',
        fontSize: 100
    },
    textStyle: {
        textAlign: 'center',
        color: '#f8f8f8',
        fontWeight: 'bold',
        fontSize: 20
    }, 
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default CongratsMsg;
