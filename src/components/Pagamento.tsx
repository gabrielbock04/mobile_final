import React, { useState } from 'react';
import { View, Text, Alert, Pressable, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { getCompra } from '../types/Compra';
import { useNavigation } from '@react-navigation/native';


const RealizarPagamento = () => {
  const { filmeSelecionado, assentosSelecionados, dataSelecionada, horarioSelecionado, valorLanche = 0 } = getCompra();
  const navigation = useNavigation() as any;

  const [mostrarQr, setMostrarQr] = useState(false);

  const [pagando, setPagando] = useState(false);
  const [formaPagamento, setFormaPagamento] = useState<'cartao' | 'pix'>('cartao');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeCartao, setNomeCartao] = useState('');

  const valorIngressos = assentosSelecionados.length * filmeSelecionado.preco;
  const valorTotal = valorIngressos + valorLanche;

  function somenteNumeroCartao(text: string) {
    let somenteNumeros = text.replace(/[^0-9]/g, '');
    somenteNumeros = somenteNumeros.slice(0, 16);
    let formatado = somenteNumeros.replace(/(.{4})/g, '$1 ').trim();
    setNumeroCartao(formatado);
  }

  function somenteNomeCartao(text: string) {
    const somenteLetras = text.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    setNomeCartao(somenteLetras);
  }

  function verificaCampos() {
    if (formaPagamento === 'cartao') {
      const numeroSemEspaco = numeroCartao.replace(/\s/g, '');
      if (!numeroSemEspaco || numeroSemEspaco.length < 16) {
        Alert.alert("Número do cartão inválido", "Digite os 16 números do cartão");
        return false;
      }
      if (!nomeCartao || nomeCartao.trim().length < 3) {
        Alert.alert("Nome no cartão inválido", "Digite o nome completo do cartão (mínimo 3 letras)");
        return false;
      }
    }
    return true;
  }

  function finalizarPagamento() {
    if (pagando) return;
    if (!verificaCampos()) return;

    setPagando(true);

    setTimeout(() => {
      setPagando(false);
      Alert.alert(
        'Pagamento realizado com sucesso!',
        '',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('IngressoFinal'),
          },
        ]
      );
    }, 3000);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
        <Text style={styles.titulo}>Pagamento</Text>
        <View style={styles.resumoBox}>
          <Text style={styles.resumoDestaque}>Resumo da Compra</Text>
          <Text style={styles.resumoTitulo}>
            Filme: <Text style={styles.destaqueLaranja}>{filmeSelecionado.nome}</Text>
          </Text>
          <Text style={styles.resumoTitulo}>
            Data: <Text style={styles.destaqueLaranja}>{dataSelecionada}</Text>
          </Text>
          <Text style={styles.resumoTitulo}>
            Horário: <Text style={styles.destaqueLaranja}>{horarioSelecionado}</Text>
          </Text>
          <Text style={styles.resumoTitulo}>
            Assentos: <Text style={styles.destaqueLaranja}>{assentosSelecionados.join(', ')}</Text>
          </Text>
          <Text style={styles.resumoTitulo}>
            Ingressos: <Text style={styles.destaqueLaranja}>R${valorIngressos.toFixed(2)}</Text>
          </Text>
          <Text style={styles.resumoTitulo}>
            Lanches: <Text style={styles.destaqueLaranja}>R${valorLanche.toFixed(2)}</Text>
          </Text>
          <View style={styles.linhaPontilhada} />
          <Text style={styles.resumoTitulo}>
            Total: <Text style={styles.destaqueLaranja}>R${valorTotal.toFixed(2)}</Text>
          </Text>
        </View>

        <View style={styles.opcoesPagamento}>
          <Pressable
            onPress={() => setFormaPagamento('cartao')}
            style={[
              styles.botaoOpcao,
              formaPagamento === 'cartao' && styles.botaoOpcaoSelecionado,
            ]}
          >
            <Text style={formaPagamento === 'cartao' ? styles.textoOpcaoSelecionado : styles.textoOpcao}>Cartão</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setFormaPagamento('pix');
              setMostrarQr(true);
            }}
            style={[
              styles.botaoOpcao,
              formaPagamento === 'pix' && styles.botaoOpcaoSelecionado,
            ]}
          >
            <Text style={formaPagamento === 'pix' ? styles.textoOpcaoSelecionado : styles.textoOpcao}>PIX</Text>
          </Pressable>
        </View>

        {formaPagamento === 'cartao' ? (
          <View>
            <TextInput
              placeholder="Número do cartão"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              value={numeroCartao}
              onChangeText={somenteNumeroCartao}
              style={styles.input}
            />
            <TextInput
              placeholder="Nome do títular do cartão"
              placeholderTextColor="#aaa"
              value={nomeCartao}
              onChangeText={somenteNomeCartao}
              style={styles.input}
            />
          </View>
        ) : (
          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <Text style={styles.resumo}>Escaneie o QrCode para pagar</Text>
            {mostrarQr && (
              <Image
                source={require('../images/qrCode.jpeg')}
                style={{ width: 200, height: 200, marginTop: 16, borderRadius: 12 }}
                resizeMode="contain"
              />
            )}
          </View>
        )}

        <Pressable
          style={styles.botaoEntrar}
          onPress={finalizarPagamento}
          disabled={pagando}
        >
          <Text style={styles.textoBotaoEntrar}>
            {pagando ? 'Processando...' : 'Confirmar Pagamento'}
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btnCancelar, pressed && styles.btnPressed]}
          onPress={() => navigation.navigate('TelaCompraLanche')}>
          <Text style={styles.btnSecundarioTexto}>Voltar</Text>
        </Pressable>
    </ScrollView>
  );
};

export default RealizarPagamento;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 24,
  },
  btnSecundarioTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  titulo: {
    color: 'white',
    fontSize: 28,
    marginTop: 28,
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    marginBottom: 18,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  resumo: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'fantasy',
    marginVertical: 2,
    textAlign: 'left',
    letterSpacing: 0.5,
  },
  destaque: {
    color: '#D14708',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'fantasy',
  },
  label: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8,
    fontFamily: 'fantasy',
  },

  opcoesPagamento: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
    justifyContent: 'center',
  },
  botaoOpcao: {
    borderWidth: 2,
    borderColor: '#D14708',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 28,
    backgroundColor: 'transparent',
    marginHorizontal: 4,
  },
  botaoOpcaoSelecionado: {
    backgroundColor: '#D14708',
    borderColor: '#D14708',
  },
  textoOpcao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'fantasy',
  },
  textoOpcaoSelecionado: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'fantasy',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#D14708',
    fontFamily: 'fantasy',
  },
  resumoBox: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#D14708',
    borderRadius: 20,
    paddingVertical: 22,
    paddingHorizontal: 18,
    width: '100%',
    maxWidth: 380,
    alignSelf: 'center',
    marginBottom: 24,
    marginTop: 10,
    shadowColor: '#D1470833',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  resumoTitulo: {
    color: '#222',
    fontSize: 18,
    fontFamily: 'sans-serif',
    marginVertical: 2,
    textAlign: 'left',
    letterSpacing: 0.5,
  },
  resumoDestaque: {
    color: 'black',
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'fantasy',
    letterSpacing: 0.5,
  },
  destaqueLaranja: {
    color: '#D14708',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'fantasy',
  },
  linhaPontilhada: {
    borderStyle: 'dashed',
    borderWidth: 1.0,
    borderColor: '#D14708',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  botaoEntrar: {
    backgroundColor: '#D14708',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginTop: 28,
    alignItems: 'center',
    shadowColor: '#D1470855',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 2,
  },
  textoBotaoEntrar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'fantasy',
    textAlign: 'center',
    letterSpacing: 1,
  },

  btnCancelar: {
    backgroundColor: '#888',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 18,
    minWidth: 90,
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 18,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  btnPressed: {
    opacity: 0.7
  },
});