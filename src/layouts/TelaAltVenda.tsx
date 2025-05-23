import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { Venda } from "../types/Venda";
import { AltVendaProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";

const TelaAltVenda = (props: AltVendaProps) => {
  const [id,] = useState(props.route.params.id);
  const [Filme, setFilme] = useState('');
  const [Cliente, setCliente] = useState('');
  const [dataVenda, setDataVenda] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [quantidade, setQuantidade] = useState('');

  async function carregar() {
    console.log(id);
    const resultado = await firestore()
      .collection('vendas')
      .doc(id)
      .get();

    const Venda = {
      id: resultado.id,
      ...resultado.data()
    } as Venda;

    setFilme(Venda.filme);
    setCliente(Venda.cliente);
    setDataVenda(Venda.dataVenda);
    setValorTotal(Venda.valorTotal.toFixed(2));
    setQuantidade(Venda.quantidade.toFixed());
  };

  useEffect(() => {
    carregar();
  }, []);

  function alterar() {
    if (verificaCampos()) {
      let produto = {
        filme: Filme,
        cliente: Cliente,
        dataVenda: dataVenda,
        valorTotal: Number.parseFloat(valorTotal),
        quantidade: Number.parseFloat(quantidade)
      } as Venda;

      firestore()
        .collection('Vendas')
        .doc(id)
        .update(produto)
        .then(() => {
          Alert.alert("Venda", "Alterada com sucesso")
          props.navigation.goBack();
        })
        .catch((error) => console.log(error));
    }
  }

  function verificaCampos() {
    if (!Filme) {
      Alert.alert("Filme em branco",
        "Digite um filme")
      return false;
    }
    if (!Cliente) {
      Alert.alert("Cliente em branco",
        "Digite um cliente")
      return false;
    }
    if (!dataVenda) {
      Alert.alert("Data da Venda em branco",
        "Digite uma data da venda")
      return false;
    }
    if (!valorTotal) {
      Alert.alert("Valor Total em branco",
        "Digite um valor total")
      return false;
    }

    let valorTotalNumero = Number.parseFloat(valorTotal)
    if (valorTotalNumero <= 0) {
      Alert.alert("Valor Total incorreto",
        "Digite um valor total maior do que zero")
      return false;
    }

    if (!quantidade) {
      Alert.alert("Quantidade de Ingressos em branco",
        "Digite uma quantidade de ingressos")
      return false;
    }
    let quantidadeNumero = Number.parseFloat(quantidade)
    if (quantidadeNumero <= 0) {
      Alert.alert("Quantidade de Ingressos incorreta",
        "Digite uma quantidade de ingressos maior do que zero")
      return false;
    }

    return true;
  }

  return (
    <ScrollView>
      <View
        style={styles.tela}>
        <Text style={styles.titulo}>Alteração de Venda</Text>
        <Text
          style={styles.titulo_campos}>
          Filme
        </Text>
        <TextInput
          style={styles.texto_botao}
          defaultValue={Filme}
          onChangeText={(text) => { setFilme(text) }} />

        <Text
          style={styles.titulo_campos}>
          Quantidade de Ingressos
        </Text>
        <TextInput
          defaultValue={quantidade}
          style={[styles.texto_botao, { width: '40%' }]}
          onChangeText={(text) => { setQuantidade(text) }} />

        <Text
          style={styles.titulo_campos}>
          Cliente
        </Text>
        <TextInput
          defaultValue={Cliente}
          style={[styles.texto_botao, { width: '60%' }]}
          onChangeText={(text) => { setCliente(text) }} />

        <Text
          style={styles.titulo_campos}>
          Data da Venda
        </Text>
        <TextInput
          defaultValue={dataVenda}
          style={[styles.texto_botao, { width: '40%' }]}
          onChangeText={(text) => { setDataVenda(text) }} />
        <Text
          style={styles.titulo_campos}>
          Valor Total
        </Text>
        <TextInput
          defaultValue={valorTotal}
          style={[styles.texto_botao, { width: '40%' }]}
          onChangeText={(text) => { setValorTotal(text) }} />

        <Pressable
          style={styles.botaoEntrar}
          onPress={() => alterar()}>
          <Text style={styles.texto_botao}>Alterar</Text>
        </Pressable>
        <Pressable
          style={styles.botaoEntrar}
          onPress={() => { props.navigation.goBack() }}>
          <Text style={styles.texto_botao}>Cancelar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default TelaAltVenda;
