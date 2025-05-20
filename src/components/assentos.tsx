import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

interface Filme {
  nome: string;
  preco: number;
}

const filmes: Filme[] = [
  { nome: 'Vingadores: Ultimato', preco: 10 },
  { nome: 'Coringa', preco: 12 },
  { nome: 'Toy Story 4', preco: 8 },
  { nome: 'O Rei Leão', preco: 9 },
];

const linhas = 6;
const colunas = 8;
const assentosOcupados = [27, 28, 19, 20, 10, 11, 44, 45, 46];

interface SelecionarAssentosProps {}

interface RenderizarAssentoProps {
  item: number;
}

function SelecionarAssentos(props: SelecionarAssentosProps) {
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme>(filmes[0]);
  const [assentosSelecionados, setAssentosSelecionados] = useState<number[]>([]);

  function alternarAssento(index: number) {
    if (assentosOcupados.includes(index)) return;
    setAssentosSelecionados((prev: number[]) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  }

  function renderizarAssento({ item }: RenderizarAssentoProps) {
    const ocupado = assentosOcupados.includes(item);
    const selecionado = assentosSelecionados.includes(item);
    let estilo: any[] = [styles.assento];
    if (ocupado) estilo.push(styles.ocupado);
    else if (selecionado) estilo.push(styles.selecionado);

    return (
      <TouchableOpacity onPress={() => alternarAssento(item)} disabled={ocupado}>
        <View style={estilo} />
      </TouchableOpacity>
    );
  }

  function gerarAssentos(): number[] {
    return Array.from({ length: linhas * colunas }, (_, i) => i);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escolha um filme:</Text>
      <View style={styles.filmesContainer}>
        {filmes.map((filme: Filme) => (
          <TouchableOpacity
            key={filme.nome}
            style={[
              styles.botaoEntrar,
              filme.nome === filmeSelecionado.nome ? styles.filmeSelecionado : null,
            ]}
            onPress={() => setFilmeSelecionado(filme)}
          >
            <Text style={styles.filmeTexto}>
              {filme.nome} (R${filme.preco})
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={gerarAssentos()}
        renderItem={renderizarAssento}
        keyExtractor={(item: number) => item.toString()}
        numColumns={colunas}
        scrollEnabled={false}
      />

      <Text style={styles.resumo}>
        Você selecionou <Text style={styles.destaque}>{assentosSelecionados.length}</Text> assento(s)
        para o valor total de{' '}
        <Text style={styles.destaque}>R${assentosSelecionados.length * filmeSelecionado.preco}</Text>
      </Text>
    </View>
  );
};

export default SelecionarAssentos;