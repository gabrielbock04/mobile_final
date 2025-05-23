import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Filme } from '../types/Filme';
import { setCompra } from '../types/Compra';

const filmes: Filme[] = [
  { nome: 'Os Vingadores', preco: 12 },
  { nome: 'Atlas', preco: 10 },
  { nome: 'Bad Boys', preco: 11 },
  { nome: 'Danificado', preco: 9 },
  { nome: 'Desespero Profundo', preco: 10 },
  { nome: 'Duna 2', preco: 13 },
  { nome: 'Godzilla e Kong: O Novo Império', preco: 14 },
  { nome: 'Imaculada', preco: 10 },
  { nome: 'Kung Fu Panda 4', preco: 9 },
  { nome: 'Mad Max: Estrada da Fúria', preco: 12 },
  { nome: 'Oppenheimer', preco: 15 },
  { nome: 'Os Três Mosqueteiros: Milady', preco: 10 },
  { nome: 'Rebel Moon: Corte do Diretor', preco: 11 },
  { nome: '1917 - O Tempo é o Maior Inimigo', preco: 13 },
  { nome: 'O Dublê', preco: 10 },
  { nome: 'Uma Vida de Esperança', preco: 9 },
  { nome: 'Minions 2: A Origem de Gru', preco: 8 },
  { nome: 'Divertidamente 2', preco: 10 },
  { nome: 'Terrifier 3', preco: 11 },
  { nome: 'Até o Último Homem', preco: 12 },
  { nome: 'Invencível', preco: 10 },
  { nome: 'Ainda Estou Aqui', preco: 9 },
  { nome: 'Titanic', preco: 14 },
];

const linhas = 6;
const colunas = 8;
const assentosOcupados = [27, 28, 19, 20, 10, 11, 44, 45, 46];
const datasDisponiveis = [
  '25/05',
  '28/05',
  '29/05',
  '03/06',
  '08/06',
  '10/06',
];

const horariosDisponiveis = [
  '13:30',
  '14:00',
  '15:00',
  '16:30',
  '19:00',
  '21:30',
  '23:00',
];



const SelecionarAssentos: React.FC = () => {
  const navigation = useNavigation<any>();

  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme>(filmes[0]);
  const [assentosSelecionados, setAssentosSelecionados] = useState<number[]>([]);

  const [dataSelecionada, setDataSelecionada] = useState(datasDisponiveis[0]);
  const [horarioSelecionado, setHorarioSelecionado] = useState(horariosDisponiveis[0]);


  const alternarAssento = (index: number) => {
    if (assentosOcupados.includes(index)) return;
    setAssentosSelecionados(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };


  const renderizarAssento = ({ item }: { item: number }) => {
    const ocupado = assentosOcupados.includes(item);
    const selecionado = assentosSelecionados.includes(item);
    return (
      <Pressable onPress={() => alternarAssento(item)} disabled={ocupado}>
        <View style={[
          styles.assento,
          ocupado ? styles.ocupado : selecionado ? styles.selecionado : null
        ]} />
      </Pressable>
    );
  }

  function verificaCampos() {
    if (assentosSelecionados.length === 0) {
      Alert.alert("Nenhum assento selecionado", "Escolha um assento");
      return false;
    }
    return true;
  }

  const gerarAssentos = () => {
    return Array.from({ length: linhas * colunas }, (_, i) => i);
  };

  return (
    <ScrollView style={styles.telaBackground} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.label}>Selecione um filme</Text>
      <View style={{ width: '100%', marginBottom: 16 }}>
        <Pressable
          style={{
            backgroundColor: '#D14708',
            borderRadius: 12,
            padding: 14,
            marginBottom: 2,
          }}
          onPress={() => setDropdownAberto(!dropdownAberto)}
        >
          <Text style={{
            color: filmeSelecionado ? 'white' : '#bdbdbd',
            fontSize: 18,
            fontFamily: 'fantasy'
          }}>
            {filmeSelecionado
              ? `${filmeSelecionado.nome} (R$${filmeSelecionado.preco})`
              : 'Selecione um filme...'}
          </Text>
        </Pressable>
        {dropdownAberto && (
          <View style={{ backgroundColor: '#4a4e69', borderRadius: 12, overflow: 'hidden' }}>
            <Text style={{ color: '#bdbdbd', fontSize: 16, fontFamily: 'fantasy', textAlign: 'center', padding: 8 }}>
              Selecione aqui o filme
            </Text>
            {filmes.map((filme) => (
              <Pressable
                key={filme.nome}
                style={{ padding: 14, borderBottomWidth: 1, borderBottomColor: '#c9ada7' }}
                onPress={() => {
                  setFilmeSelecionado(filme);
                  setDropdownAberto(false);
                }}
              >
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'fantasy' }}>
                  {filme.nome} (R${filme.preco})
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>

      <Text style={styles.label}>Selecione uma data</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: 'black', marginBottom: 50 }}
        contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: -8 }}
      >
        {datasDisponiveis.map(data => (
          <Pressable
            key={data}
            style={[
              styles.botaoDataHorario,
              data === dataSelecionada ? styles.selecionado : null,
            ]}
            onPress={() => setDataSelecionada(data)}
          >
            <Text style={{ color: data === dataSelecionada ? 'white' : '#0D1117', fontFamily: 'fantasy', fontSize: 17, fontWeight: 'bold' }}>
              {data}
            </Text>
          </Pressable>
        ))}
      </ScrollView>


      <Text style={styles.labelTitulo}>Selecione um horário</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: 'black', marginBottom: 50 }}
        contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: -8 }}
      >
        {horariosDisponiveis.map(horario => (
          <Pressable
            key={horario}
            style={[
              styles.botaoDataHorario,
              horario === horarioSelecionado ? styles.selecionado : null,
            ]}
            onPress={() => setHorarioSelecionado(horario)}
          >
            <Text style={{ color: horario === horarioSelecionado ? 'white' : '#0D1117', fontFamily: 'fantasy', fontSize: 17, fontWeight: 'bold' }}>
              {horario}
            </Text>
          </Pressable>
        ))}
      </ScrollView >

      <Text style={styles.labelTitulo}>Escolha o(s) assento(s)</Text>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={gerarAssentos()}
          renderItem={renderizarAssento}
          keyExtractor={(item) => item.toString()}
          numColumns={colunas}
          scrollEnabled={false}
        />

      <Text style={styles.labelTitulo}>TELA</Text>

        <Text style={styles.resumo}>
          Você selecionou <Text style={styles.destaque}>{assentosSelecionados.length}</Text> assento(s)
          para o valor total de{' '}
          <Text style={styles.destaque}>R${assentosSelecionados.length * filmeSelecionado.preco}</Text>
        </Text>

        <Text style={styles.resumo}>
          Data escolhida: <Text style={styles.destaque}>{dataSelecionada}</Text>{' '}
          | Horário: <Text style={styles.destaque}>{horarioSelecionado}</Text>
        </Text>

        <View style={styles.botoesCadastrarBox}>
          <Pressable
            style={({ pressed }) => [styles.btnCancelar, pressed && styles.btnPressed]}
          onPress={() => navigation.navigate('TelaEscolherFilme')}>
            <Text style={styles.btnSecundarioTexto}>Voltar</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              if (verificaCampos()) {
                setCompra(filmeSelecionado, assentosSelecionados, dataSelecionada, horarioSelecionado);
                navigation.navigate('TelaCompraLanche');
              }
            }}
            style={styles.botaoComprar}
          >
            <Text style={styles.textoBotaoComprar}>
              CONFIRME AQUI
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  telaBackground: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  label: {
    fontSize: 22,
    color: '#f2e9e4',
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    marginTop: 25,
    marginVertical: 12,
    textAlign: 'center',
    letterSpacing: 1,
  },

  labelTitulo: {
    fontSize: 22,
    color: '#f2e9e4',
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    marginTop: 5,
    marginVertical: 12,
    textAlign: 'center',
    letterSpacing: 1,
  },

  botoesCadastrarBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 5
  },
  btnSecundarioTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  btnCancelar: {
    backgroundColor: '#888',
    paddingVertical: 10,
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
  picker: {
    width: '100%',
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 16,
    height: 48,
  },
  filmesContainer: {
    display: 'none',
  },
  datasHorariosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 8,
  },
  botaoDataHorario: {
    backgroundColor: '#c9ada7',
    paddingVertical: 8,
    color: '#white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'fantasy',
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    minWidth: 80,
  },
  textoBotaoDataHorario: {
    color: 'white',
    fontFamily: 'fantasy',
    backgroundColor: '#c9ada7',
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  assento: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#c9ada7',
    margin: 6,
    borderWidth: 2,
    borderColor: '#4a4e69',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17
  },
  selecionado: {
    backgroundColor: '#d14708',
    borderColor: '#d14708',
    borderWidth: 3,
  },
  ocupado: {
    backgroundColor: '#22223b',
    borderColor: '#9a8c98',
    opacity: 0.5,
  },
  listaAssentos: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  botaoComprar: {
    backgroundColor: '#D14708',
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 18,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotaoComprar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'fantasy',
    letterSpacing: 1,
  },
  resumo: {
    color: 'white',
    fontSize: 18,
    marginTop: 16,
    fontFamily: 'fantasy',
    textAlign: 'center',
  },

  destaque: {
    backgroundColor: 'black',
    color: '#d14708',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SelecionarAssentos;