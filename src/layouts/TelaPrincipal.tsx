import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';

const TelaPrincipal = (props: PrincipalProps) => {
    return (
    <View style={styles.tela}>

  
        <Text style={styles.titulo}>Bem Vindo </Text>
      

      <Pressable
        style={styles.botaoEntrar}
        onPress={() => props.navigation.navigate('assentos')}
      >
        <Text style={styles.botaoEntrar}>Cadastrar </Text>
      </Pressable>
    </View>
  );
};

export default TelaPrincipal;