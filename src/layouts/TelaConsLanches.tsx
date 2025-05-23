import React, { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { ConsLanchesProps } from "../navigation/HomeNavigator";
import { Lanche } from "../types/Lanche";
import { styles } from "../styles/styles";

const TelaConsVenda = (props: ConsLanchesProps) => {
  const [lanche, setLanche] = useState<Lanche[]>([]);

  useEffect(() => {
    const subscribe = firestore()
      .collection('lanches')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as Lanche[];

        setLanche(data);
      });

    return () => subscribe();
  }, []);

  function deletarVenda(id: string) {
    firestore()
      .collection('lanches')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert("Lanche", "Cancelado com sucesso")
      })
      .catch((error) => console.log(error));
  }

  function alterarVenda(id: string) {
    props.navigation.navigate("TelaAltLanche", { id: id })
  }

  return (
    <View style={styles.tela}>
      <Text style={[styles.titulo, { marginBottom: 16 }]}>Listagem de Lanches Comprados</Text>
      <FlatList
        data={lanche}
        keyExtractor={item => item.id}
        renderItem={(info) =>
          <ItemVenda
            id={info.item.id}
            lanche={info.item}
            onDeletar={deletarVenda}
            onAlterar={alterarVenda}
          />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <View style={styles.container}>
        <Pressable
          style={[styles_local.botao_voltar]}
          onPress={() => { props.navigation.goBack() }}>
          <Text style={styles_local.texto_botao_voltar}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

type ItemLancheProps = {
  id: string;
  lanche: Lanche;
  onDeletar: (id: string) => void;
  onAlterar: (id: string) => void;
}

const ItemVenda = (props: ItemLancheProps) => {
  return (
    <View style={styles_local.card}>
      <View style={styles_local.dados_card}>
        <Text style={styles_local.id_lanche}>
          {props.id}
        </Text>
        <Text style={styles_local.texto_info}>
          Comprou Pipoca: {props.lanche.pipoca}
        </Text>
        {props.lanche.pipoca === 'Sim' && (
          <>
            <Text style={styles_local.texto_info}>
              Tamanho Pipoca: {props.lanche.tamanhoPipoca}
            </Text>
            <Text style={styles_local.texto_info}>
              Sabor Pipoca: {props.lanche.saborPipoca}
            </Text>
          </>
        )}
        <Text style={styles_local.texto_info}>
          Comprou Refrigerante: {props.lanche.refrigerante}
        </Text>
        {props.lanche.refrigerante === 'Sim' && (
          <>
            <Text style={styles_local.texto_info}>
              Tamanho Refrigerante: {props.lanche.tamanhoRefri}
            </Text>
            <Text style={styles_local.texto_info}>
              Sabor Refrigerante: {props.lanche.saborRefri}
            </Text>
          </>
        )}
        <Text style={styles_local.texto_info}>
          Preço: R${props.lanche.valorCombo?.toFixed(2)}
        </Text>
      </View>
      <View style={styles_local.botoes_card}>
        <Pressable
          style={styles_local.botao_deletar}
          onPress={() => props.onDeletar(props.lanche.id)}>
          <Text style={styles_local.texto_botao_card}>X</Text>
        </Pressable>
        <Pressable
          style={styles_local.botao_alterar}
          onPress={() => props.onAlterar(props.lanche.id)}>
          <Text style={styles_local.texto_botao_card}>A</Text>
        </Pressable>
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
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dados_card: {
    flex: 1,
    paddingRight: 10,
  },
  botoes_card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  botao_deletar: {
    backgroundColor: '#e74c3c',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 2,
  },
  botao_alterar: {
    backgroundColor: '#f1c40f',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  texto_botao_card: {
    fontWeight: "bold",
    fontSize: 22,
    color: 'black'
  },
  id_lanche: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  texto_info: {
    fontSize: 18,
    color: '#222',
    marginBottom: 2,
  },
  botao_voltar: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    elevation: 2,
    width: '50%',
  },
  texto_botao_voltar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});