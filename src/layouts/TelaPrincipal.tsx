import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';

const TelaPrincipal = (props: PrincipalProps) => {
  return (
    <View style={styles.tela}>
      <Pressable
        style={({ pressed }) => [styles.botaoEntrar, pressed && styles.click]}
        onPress={() => {
          props.navigation.navigate('Inicio');
        }}
      >
        <Text style={styles.texto_botao}>Início</Text>
      </Pressable>
    </View>
  );
};

export default TelaPrincipal;