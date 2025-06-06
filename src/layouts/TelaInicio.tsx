import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { styles } from '../styles/styles';
import { InicioProps } from '../navigation/HomeNavigator';

const Inicio = (props: InicioProps) => {
  return (
    <View style={styles.telaBackground}>
      <Text style={styles.titulo}>Ingressos de Cinema</Text>
      <Image
        source={require('../images/capaInicio.png')}
        style={styles.image}
      />
      <Text style={styles.descricao}>
        O cinema que você ama, na palma da mão. Reserve e curta filmes incríveis com um clique!   </Text>
      <Pressable style={styles.botaoEntrar}
        onPress={() => { props.navigation.navigate('TelaEscolherFilme') }}>
        <Text style={styles.texto_botao}>Compre agora</Text>
      </Pressable>
    </View>
  );
};

export default Inicio;