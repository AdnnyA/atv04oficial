import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Sobre extends Component{

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize:30, fontWeight: 700, marginBottom: 15}}> MACACOS JAPONESES</Text>
                <View style={{ width: 340, paddingLeft: 10}}>
                <Text style={{fontSize:20, color: 'gray'}}>Alguns macacos japoneses usam moedas para comprar petiscos em máquinas de conveniência.</Text>
                </View>
            </View>
        )
    }
}