import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import CongratsMsg from './CongratsMsg';
import Form from './Form';
import {Button} from './common';

class BackGround extends Component {

    state = {launched:false};
    
    renderContent(){
        if(this.state.launched){
            return (<Form/>);
        }
        return ( 
            <View style={styles.viewStyle} >
            <CongratsMsg/>
            <Button onPress={ ()=>{ this.setState({launched:true});} }>LAUNCH TODAY</Button>
            </View>
        ); 
    }

    render(){
        return (
            <ImageBackground source={require('./a.jpg')} style = {styles.backGround} >
            {this.renderContent()}
           </ImageBackground>
        );
    }
};

const styles ={
    backGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center'
    }
};
export default BackGround;
