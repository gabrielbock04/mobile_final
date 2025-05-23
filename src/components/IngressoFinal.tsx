import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { getCompra } from '../types/Compra';
import { useNavigation } from '@react-navigation/native';
import { IngressoProps } from '../navigation/HomeNavigator';


const IngressoFinal = () => {
  const navigation = useNavigation<IngressoProps['navigation']>();
  const { filmeSelecionado, assentosSelecionados, dataSelecionada, horarioSelecionado, valorLanche = 0 } = getCompra();

  const valorIngressos = assentosSelecionados.length * filmeSelecionado.preco;
  const valorTotalPago = valorIngressos + valorLanche;

  return (
    <View style={styles.container}>
      <Text style={styles.tituloLaranja}>Ingresso garantido!</Text>
      <Text style={styles.agradecimento}>
        Agradecemos pela preferência e desejamos uma ótima sessão.
      </Text>

      <View style={styles.ingressoBoxFundo}>
      
        <View style={styles.ingressoBox}>
          <Text style={styles.resumoDestaque}>Detalhes do Ingresso</Text>
          <Text style={styles.resumo}>
            Filme: <Text style={styles.destaqueLaranja}>{filmeSelecionado.nome}</Text>
          </Text>
          <Text style={styles.resumo}>
            Data: <Text style={styles.destaqueLaranja}>{dataSelecionada}</Text>
          </Text>
          <Text style={styles.resumo}>
            Horário: <Text style={styles.destaqueLaranja}>{horarioSelecionado}</Text>
          </Text>
          <Text style={styles.resumo}>
            Assentos: <Text style={styles.destaqueLaranja}>{assentosSelecionados.join(', ')}</Text>
          </Text>
          <Text style={styles.resumo}>
            Lanche: <Text style={styles.destaqueLaranja}>R${valorLanche.toFixed(2)}</Text>
          </Text>
          <View style={styles.linhaPontilhada} />
          <Text style={styles.resumo}>
            Total pago: <Text style={styles.destaqueLaranja}>R${valorTotalPago.toFixed(2)}</Text>
          </Text>
        </View>
     
      </View>

      <Pressable
        style={styles.botaoEntrar}
        onPress={() => navigation.navigate('TelaEscolherFilme')}
      >
        <Text style={styles.textoBotaoEntrar}>Voltar para Início</Text>
      </Pressable>
    </View>
  );
};

export default IngressoFinal;

const TRIANGLE_SIZE = 18;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
  },
  tituloLaranja: {
    color: '#D14708',
    fontSize: 33,
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    marginTop: 70,
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 1.8,
  },
  agradecimento: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'fantasy',
    marginBottom: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  ingressoBoxFundo: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 70,
    marginBottom: 10,
    alignSelf: 'center',
  },
  ingressoBox: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#D14708',
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 10,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'visible',
  },
  
  linhaPontilhada: {
    borderStyle: 'dashed',
    borderWidth: 1.0,
    borderColor: '#D14708',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  resumo: {
    color: 'black',
    fontSize: 17.5,
    fontFamily: 'sans-serif',
    marginVertical: 2,
    textAlign: 'left',
    letterSpacing: 0.5,
  },

    resumoDestaque: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'left',
    letterSpacing: 0.5,
  },
  destaqueLaranja: {
    color: '#D14708',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'sans-serif',
  },
  botaoEntrar: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 36,
    marginTop: 76,
    alignItems: 'center',
  },
  textoBotaoEntrar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'fantasy',
    textAlign: 'center',
    letterSpacing: 1,
  },
});