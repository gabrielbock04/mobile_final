import { useEffect, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { Lanche } from "../types/Lanche";
import { AltLancheProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";

const TelaAltLanche = (props: AltLancheProps) => {
  const [id] = useState(props.route.params.id);
  const [pipoca, setPipoca] = useState('');
  const [quantidadePipocaP, setQuantidadePipocaP] = useState('0');
  const [quantidadePipocaM, setQuantidadePipocaM] = useState('0');
  const [quantidadePipocaG, setQuantidadePipocaG] = useState('0');
  const [refrigerante, setRefrigerante] = useState('');
  const [quantidadeRefriP, setQuantidadeRefriP] = useState('0');
  const [quantidadeRefriM, setQuantidadeRefriM] = useState('0');
  const [quantidadeRefriG, setQuantidadeRefriG] = useState('0');
  const [valorCombo, setValorCombo] = useState('');

  async function carregar() {
    const resultado = await firestore()
      .collection('lanches')
      .doc(id)
      .get();

    const lanche = {
      id: resultado.id,
      ...resultado.data()
    } as Lanche;

    setPipoca(lanche.pipoca);
    setQuantidadePipocaP(lanche.quantidadePipocaP.toString());
    setQuantidadePipocaM(lanche.quantidadePipocaM.toString());
    setQuantidadePipocaG(lanche.quantidadePipocaG.toString());
    setRefrigerante(lanche.refrigerante);
    setQuantidadeRefriP(lanche.quantidadeRefriP.toString());
    setQuantidadeRefriM(lanche.quantidadeRefriM.toString());
    setQuantidadeRefriG(lanche.quantidadeRefriG.toString());
    setValorCombo(lanche.valorCombo.toFixed(2));
  };

  useEffect(() => {
    carregar();
  }, []);

  function alterar() {
    if (verificaCampos()) {
      let produto = {
        pipoca: pipoca,
        quantidadePipocaP: Number.parseInt(quantidadePipocaP),
        quantidadePipocaM: Number.parseInt(quantidadePipocaM),
        quantidadePipocaG: Number.parseInt(quantidadePipocaG),
        refrigerante: refrigerante,
        quantidadeRefriP: Number.parseInt(quantidadeRefriP),
        quantidadeRefriM: Number.parseInt(quantidadeRefriM),
        quantidadeRefriG: Number.parseInt(quantidadeRefriG),
        valorCombo: Number.parseFloat(valorCombo)
      } as Lanche;

      firestore()
        .collection('lanches')
        .doc(id)
        .update(produto)
        .then(() => {
          Alert.alert("lanche", "Alterado com sucesso")
          props.navigation.goBack();
        })
        .catch((error) => console.log(error));
    }
  }

  function verificaCampos() {
    if (!pipoca) {
      Alert.alert("Pipoca em branco", "Digite se tem pipoca");
      return false;
    }
    if (!refrigerante) {
      Alert.alert("Refrigerante em branco", "Digite se tem refrigerante");
      return false;
    }
    if (!valorCombo) {
      Alert.alert("Valor Total em branco", "Digite um Valor Total");
      return false;
    }
    let valorComboNumero = Number.parseFloat(valorCombo)
    if (valorComboNumero < 0) {
      Alert.alert("Valor Total incorreto", "Digite um valor total maior do que zero");
      return false;
    }
    return true;
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Alteração de Venda</Text>

      <Text style={styles.titulo}>Pipoca (Sim/Não)</Text>
      <TextInput
        value={pipoca}
        onChangeText={setPipoca}
        style={styles.container}
        placeholder="Sim ou Não"
      />

      <Text style={styles.titulo}>Quantidade Pipoca P</Text>
      <TextInput
        value={quantidadePipocaP}
        onChangeText={setQuantidadePipocaP}
        keyboardType="numeric"
        style={styles.container}
        placeholder="Quantidade Pipoca P"
      />

      <Text style={styles.titulo}>Quantidade Pipoca M</Text>
      <TextInput
        value={quantidadePipocaM}
        onChangeText={setQuantidadePipocaM}
        keyboardType="numeric"
        style={styles.container}
        placeholder="Quantidade Pipoca M"
      />

      <Text style={styles.titulo}>Quantidade Pipoca G</Text>
      <TextInput
        value={quantidadePipocaG}
        onChangeText={setQuantidadePipocaG}
        keyboardType="numeric"
        style={styles.container}
        placeholder="Quantidade Pipoca G"
      />

      <Text style={styles.titulo}>Refrigerante (Sim/Não)</Text>
      <TextInput
        value={refrigerante}
        onChangeText={setRefrigerante}
        style={styles.container}
        placeholder="Sim ou Não"
      />

      <Text style={styles.titulo}>Quantidade Refri P</Text>
      <TextInput
        value={quantidadeRefriP}
        onChangeText={setQuantidadeRefriP}
        keyboardType="numeric"
        style={styles.container}
        placeholder="Quantidade Refri P"
      />

      <Text style={styles.titulo}>Quantidade Refri M</Text>
      <TextInput
        value={quantidadeRefriM}
        onChangeText={setQuantidadeRefriM}
        keyboardType="numeric"
        style={styles.container}
        placeholder="Quantidade Refri M"
      />

      <Text style={styles.titulo}>Quantidade Refri G</Text>
      <TextInput
        value={quantidadeRefriG}
        onChangeText={setQuantidadeRefriG}
        keyboardType="numeric"
        style={styles.container}
        placeholder="Quantidade Refri G"
      />

      <Text style={styles.titulo}>Valor Total</Text>
      <TextInput
        value={valorCombo}
        onChangeText={setValorCombo}
        keyboardType="numeric"
        style={styles.container}
        placeholder="Valor Total do Combo"
      />

      <Pressable
        style={styles.botaoEntrar}
        onPress={alterar}>
        <Text style={styles.texto_botao}>Alterar</Text>
      </Pressable>
      <Pressable
        style={styles.filmeBotao}
        onPress={() => { props.navigation.goBack() }}>
        <Text style={styles.texto_botao}>Cancelar</Text>
      </Pressable>
    </View>
  );
}

export default TelaAltLanche;