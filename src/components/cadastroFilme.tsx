import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable, Alert, FlatList, ScrollView } from 'react-native';
import { styles } from '../styles/styles';

interface Filme {
  nome: string;
  preco: string;
  genero: string;
  ano: string;
}

const CadastroFilme = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [filmes, setFilmes] = useState<Filme[]>([]);

  function verificaCampos() {
    if (!nome) {
      Alert.alert("Nome em branco", "Digite o nome do filme");
      return false;
    }
    if (!preco) {
      Alert.alert("Preço em branco", "Digite o preço do ingresso");
      return false;
    }
    if (isNaN(Number(preco))) {
      Alert.alert("Preço inválido", "O preço deve ser um número");
      return false;
    }
    if (!genero) {
      Alert.alert("Gênero em branco", "Digite o gênero do filme");
      return false;
    }
    if (!ano) {
      Alert.alert("Ano em branco", "Digite o ano de lançamento");
      return false;
    }
    if (!/^\d{4}$/.test(ano)) {
      Alert.alert("Ano inválido", "O ano deve ter 4 dígitos");
      return false;
    }
    return true;
  }

  function limparCampos() {
    setNome('');
    setPreco('');
    setGenero('');
    setAno('');
  }

  function limparCamposMensagem() {
    limparCampos();
    Alert.alert('Dados apagados com sucesso!');
  }

  function cadastrarFilme() {
    if (verificaCampos()) {
      setFilmes([...filmes, { nome, preco, genero, ano }]);
      limparCampos();
      Alert.alert('Filme cadastrado com sucesso!');
    }
  }

  return (
    <ScrollView style={styles.tela}>
      <View style={styles.filmesContainer}>
        <Text style={styles.titulo}>Cadastro de Filmes</Text>
      </View>

      <View style={styles.filmesContainer}>
        <Text style={styles.label}>Nome do filme</Text>
        <TextInput
          style={styles.filmesContainer}
          placeholder="Digite aqui..."
          placeholderTextColor="#FFFFFF"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Preço do ingresso</Text>
        <TextInput
          style={styles.filmesContainer}
          placeholder="Digite aqui..."
          placeholderTextColor="#FFFFFF"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Gênero</Text>
        <TextInput
          style={styles.filmesContainer}
          placeholder="Digite aqui..."
          placeholderTextColor="#FFFFFF"
          value={genero}
          onChangeText={setGenero}
        />
        <Text style={styles.label}>Ano de lançamento</Text>
        <TextInput
          style={styles.filmesContainer}
          placeholder="Digite aqui..."
          placeholderTextColor="#FFFFFF"
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
          maxLength={4}
        />
        <View style={styles.botaoEntrar}>
          <Pressable
            style={({ pressed }) => [styles.botaoEntrar, pressed && styles.click]}
            onPress={cadastrarFilme}
          >
            <Text style={styles.texto_botao}>Cadastrar filme</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.botaoEntrar, pressed && styles.click]}
            onPress={limparCamposMensagem}
          >
            <Text style={styles.texto_botao}>Cancelar</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.titulo}></Text>
      <Text style={styles.titulo}>Lista de filmes cadastrados</Text>

      <FlatList
        data={filmes}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={[styles.container, { alignItems: 'flex-start' }]}>
            <Text style={styles.texto_botao}>Nome: {item.nome}</Text>
            <Text style={styles.texto_botao}>Preço: R${item.preco}</Text>
            <Text style={styles.texto_botao}>Gênero: {item.genero}</Text>
            <Text style={styles.texto_botao}>Ano: {item.ano}</Text>
          </View>
        )}
      />
      <Text style={styles.titulo}></Text>
    </ScrollView>
  );
};

export default CadastroFilme;