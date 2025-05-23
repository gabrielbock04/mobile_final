import React, { useState } from 'react';
import {Text, View, Pressable, Alert} from 'react-native';
import { styles } from '../styles/styles';
import { Venda } from '../types/Venda';
import { CadVendaProps } from '../navigation/HomeNavigator';
import CadastrarVenda from './CadastrarVenda';
import firestone from '@react-native-firebase/firestore';


const TelaCadVenda = (props: CadVendaProps) => {


   return ( 
       <View style={[styles.tela, styles.container]}>
        <CadastrarVenda />
        <Pressable style={styles.botaoEntrar}
                      onPress={() => props.navigation.goBack()}>
                      <Text style={styles.titulo_campos}>Voltar</Text>
                    </Pressable>
       </View>
   )
};

export default TelaCadVenda;
