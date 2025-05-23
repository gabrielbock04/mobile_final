import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { ConsVendaProps } from "../navigation/HomeNavigator";
import { Venda } from "../types/Venda";
import { styles } from "../styles/styles";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const TelaConsVenda = (props: ConsVendaProps) => {
  const [venda, setVenda] = useState<Venda[]>([]);

  useEffect(() => {
    const subscribe = firestore()
      .collection('vendas')
      .onSnapshot(querySnapshot => { 
        
        const data = querySnapshot.docs.map(doc => {     
          return {
            id: doc.id,
            ...doc.data() 
          }

        }) as Venda[];

        setVenda(data);
      });

    return () => subscribe();
  }, []);

  function deletarVenda(filme: string) {
    firestore()
      .collection('vendas')
      .doc(filme)
      .delete()
      .then(() => {
        Alert.alert("Venda", "Cancelada com sucesso")
      })
      .catch((error) => console.log(error));
  }

  function alterarVenda(id: string) {
    props.navigation.navigate("TelaAltVenda", { id: id })
  }

  return (
    <View style={styles.tela}>

      <Text style={styles.titulo}>Listagem de Vendas</Text>
      <FlatList
        data={venda}
        renderItem={(info) =>
          <ItemVenda
            Ingresso={info.item.filme}
            venda={info.item}
            onDeletar={deletarVenda}
            onAlterar={alterarVenda} />} />


      <View
        style={styles.container}>
        <Pressable
          style={[styles.botaoEntrar, { width: '40%' }]}
          onPress={() => { props.navigation.goBack() }}>
          <Text style={styles.texto_botao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

type ItemVendaProps = {
  Ingresso: string;
  venda: Venda;
  onDeletar: (filme: string) => void;
  onAlterar: (filme: string) => void;
}

const ItemVenda = (props: ItemVendaProps) => {

  return (
    <View style={styles.container}>
      <View style={styles_local.dados_card}>
        <Text style={{ fontSize: 30, color: 'black' }}>
          {props.Ingresso }
        </Text>
        <Text style={{ fontSize: 20 }}>
          Data Venda:{props.venda.dataVenda}
          </Text>

        <Text style={{ fontSize: 20 }}>
         Quantidade de Ingressos:{props.venda.quantidade}
        </Text>

        <Text style={{ fontSize: 20 }}>
          Ingresso:{props.venda.filme}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Preço: R${props.venda.valorTotal.toFixed(2)}
        </Text>
      </View>

      <View
        style={styles_local.botoes_card}>
        <View style={styles_local.botao_deletar}>
          <Pressable
            onPress={() => props.onDeletar(props.venda.id)}>
            <Text style={styles_local.texto_botao_card}>
              X
            </Text>
          </Pressable>
        </View>

        <View style={styles_local.botao_alterar}>
          <Pressable
            onPress={() => props.onAlterar(props.venda.id)}>
            <Text style={styles_local.texto_botao_card}>
              A
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TelaConsVenda;

const styles_local = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  dados_card: {
    marginBottom: 10,
  },
  botoes_card: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  botao_deletar: {
    backgroundColor: '#e74c3c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  botao_alterar: {
    backgroundColor: '#f1c40f',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  texto_botao_card: {
    fontWeight: "bold",
    fontSize: 18,
    color: '#fff',
  }
});

