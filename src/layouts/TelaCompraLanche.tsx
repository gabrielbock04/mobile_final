import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View, ScrollView, Image } from 'react-native';
import { styles } from '../styles/styles';
import { Lanche } from '../types/Lanche';
import { ComprarLancheProps } from '../navigation/HomeNavigator';
import firestore from '@react-native-firebase/firestore';
import { atualizarCompra } from '../types/Compra';

const PRECO_PIPOCA_P = 10;
const PRECO_PIPOCA_M = 15;
const PRECO_PIPOCA_G = 20;
const PRECO_REFRI_P = 7;
const PRECO_REFRI_M = 10;
const PRECO_REFRI_G = 13;

const ComprarLanche = (props: ComprarLancheProps) => {
  const [quantidadePipocaP, setQuantidadePipocaP] = useState<number>(0);
  const [quantidadePipocaM, setQuantidadePipocaM] = useState<number>(0);
  const [quantidadePipocaG, setQuantidadePipocaG] = useState<number>(0);

  const [quantidadeRefriP, setQuantidadeRefriP] = useState<number>(0);
  const [quantidadeRefriM, setQuantidadeRefriM] = useState<number>(0);
  const [quantidadeRefriG, setQuantidadeRefriG] = useState<number>(0);

  function cadastrar() {
    const lanche: Lanche = {
      id: '',
      pipoca: 'Sim',
      quantidadePipocaP,
      quantidadePipocaM,
      quantidadePipocaG,
      refrigerante: 'Sim',
      quantidadeRefriP,
      quantidadeRefriM,
      quantidadeRefriG,
      valorCombo: totalPipoca + totalRefri,
    };

    firestore()
      .collection('lanches')
      .add(lanche)
      .then(() => {
        Alert.alert("Lanche", "Cadastrado com sucesso!");
        limparCampos();
      })
      .catch((error: any) => {
        Alert.alert("Erro", String(error));
      });
  }

  function limparCampos() {
    setQuantidadePipocaP(0);
    setQuantidadePipocaM(0);
    setQuantidadePipocaG(0);
    setQuantidadeRefriP(0);
    setQuantidadeRefriM(0);
    setQuantidadeRefriG(0);
  }

  const ProdutoBox = ({
    nome,
    descricao,
    preco,
    quantidade,
    setQuantidade
  }: {
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    setQuantidade: (q: number) => void
  }) => (
    <View style={styles.produtoBox}>
      <View style={styles.produtoBoxInfo}>
        <Text style={styles.produtoNome}>{nome}</Text>
        <Text style={styles.produtoDescricao}>{descricao}</Text>
        <Text style={styles.produtoPreco}>R$ {preco}</Text>
      </View>
      <Pressable
        onPress={() => setQuantidade(quantidade > 0 ? quantidade - 1 : 0)}
        style={({ pressed }) => [
          styles.produtoBtn,
          pressed && styles.produtoBtnPressed
        ]}>
        <Text style={styles.produtoBtnTexto}>-</Text>
      </Pressable>
      <View style={styles.produtoInputBox}>
        <TextInput
          style={styles.produtoInput}
          keyboardType="numeric"
          value={quantidade === 0 ? '' : quantidade.toString()}
          onChangeText={valor => {
            if (valor === '') {
              setQuantidade(0);
            } else {
              const num = parseInt(valor.replace(/[^0-9]/g, ''), 10);
              setQuantidade(isNaN(num) ? 0 : num);
            }
          }}
          maxLength={2}
        />
      </View>
      <Pressable
        onPress={() => setQuantidade(quantidade + 1)}
        style={({ pressed }) => [
          styles.produtoBtn,
          pressed && styles.produtoBtnPressed
        ]}>
        <Text style={styles.produtoBtnTexto}>+</Text>
      </Pressable>
    </View>
  );

  const totalPipoca =
    (quantidadePipocaP * PRECO_PIPOCA_P) +
    (quantidadePipocaM * PRECO_PIPOCA_M) +
    (quantidadePipocaG * PRECO_PIPOCA_G);

  const totalRefri =
    (quantidadeRefriP * PRECO_REFRI_P) +
    (quantidadeRefriM * PRECO_REFRI_M) +
    (quantidadeRefriG * PRECO_REFRI_G);

  const valorTotal = totalPipoca + totalRefri;

  return (
    <ScrollView>
      <View style={styles.containerFundo}>
        <View style={styles.topoIconeBox}>
          <Image
            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/set-1-1/70/pop_corn-512.png' }}
            style={styles.topoIcone}
            resizeMode="contain"
          />
        </View>

        <View style={styles.containerInterno}>
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            Que tal uma pipoca ou bebida pra acompanhar o filme?
          </Text>

          <Text style={styles.subtitulo}>
            Selecione a Pipoca
          </Text>
          <ProdutoBox
            nome="Pipoca Pequena"
            descricao="Escolha o sabor na hora da retirada"
            preco={PRECO_PIPOCA_P}
            quantidade={quantidadePipocaP}
            setQuantidade={setQuantidadePipocaP}
          />
          <ProdutoBox
            nome="Pipoca Média"
            descricao="Escolha o sabor na hora da retirada"
            preco={PRECO_PIPOCA_M}
            quantidade={quantidadePipocaM}
            setQuantidade={setQuantidadePipocaM}
          />
          <ProdutoBox
            nome="Pipoca Grande"
            descricao="Escolha o sabor na hora da retirada"
            preco={PRECO_PIPOCA_G}
            quantidade={quantidadePipocaG}
            setQuantidade={setQuantidadePipocaG}
          />

          <Text style={styles.subtitulo}>
            Selecione o Refrigerante
          </Text>
          <ProdutoBox
            nome="Refrigerante 300ml"
            descricao="Escolha o sabor na hora da retirada"
            preco={PRECO_REFRI_P}
            quantidade={quantidadeRefriP}
            setQuantidade={setQuantidadeRefriP}
          />
          <ProdutoBox
            nome="Refrigerante 500ml"
            descricao="Escolha o sabor na hora da retirada"
            preco={PRECO_REFRI_M}
            quantidade={quantidadeRefriM}
            setQuantidade={setQuantidadeRefriM}
          />
          <ProdutoBox
            nome="Refrigerante 700ml"
            descricao="Escolha o sabor na hora da retirada"
            preco={PRECO_REFRI_G}
            quantidade={quantidadeRefriG}
            setQuantidade={setQuantidadeRefriG}
          />

          <Text style={styles.totalPipoca}>
            Total Pipoca: R$ {totalPipoca}
          </Text>
          <Text style={styles.totalRefri}>
            Total Refrigerante: R$ {totalRefri}
          </Text>
          <Text style={styles.totalGeral}>
            VALOR TOTAL: R$ {valorTotal}
          </Text>

          <View style={styles.botoesCadastrarBox}>
            <Pressable
              style={({ pressed }) => [styles.btnCancelar, pressed && styles.btnPressed]}
              onPress={() => props.navigation.navigate('assentos')}>
              <Text style={styles.btnSecundarioTexto}>Voltar</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.btnCadastrar, pressed && styles.btnPressed]}
              onPress={() => {
                atualizarCompra({ valorLanche: valorTotal });
                cadastrar(); //salvar o lanche no Firestore
                props.navigation.navigate('Pagamento');
              }}>
              <Text style={styles.btnCadastrarTexto}>Comprar</Text>
            </Pressable>


            <Pressable
              style={({ pressed }) => [styles.btnPular, pressed && styles.btnPressed]}
              onPress={() => props.navigation.navigate('Pagamento')}>
              <Text style={styles.btnSecundarioTexto}>Pular</Text>
            </Pressable>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

export default ComprarLanche;