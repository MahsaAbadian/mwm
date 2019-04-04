import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Input} from './common';

class Form extends Component {
    state = {
        item: 0,
        guidelines:[],
        inputs:[],
    }
    componentWillMount(){
        var gl = require('./guidelines.json');
        this.setState({guidelines: gl});
    }
    render(){
        return (
        <View style={styles.viewStyle} >
            <Text  style={styles.titleStyle} >Gratitude List</Text>
            <Text style={styles.textStyle} >{this.state.guidelines[this.state.item].text}</Text>
            <Input 
            placeholder=''
            label='1.'
            value={this.state.inputs[this.state.item]}
            onChangeText={
                (input)=>{
                  console.log('changed');
                this.setState({ inputs: [input] })
                }
                }
            onSubmitEditing = {
                () => {

                }
            }
            />
        </View>
        );
    }
};

const styles ={
    titleStyle: {
        textAlign: 'center',
        color: '#f8f8f8',
        fontWeight: 'bold',
        fontSize: 40,
        paddingTop: 100
    },
    textStyle: {
        textAlign: 'center',
        color: '#f8f8f8',
        fontSize: 15,
        width: 200,
        fontWeight: 'bold',
        paddingTop: 50
    },
    viewStyle: {
        alignItems: 'center',
        flex:1
    }
};
export default Form;
