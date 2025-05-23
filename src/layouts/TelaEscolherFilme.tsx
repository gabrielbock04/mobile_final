import React, { useState } from 'react';
import { Pressable, Image, ScrollView, Text, View, Alert, Modal } from 'react-native';
import { EscolherFilmeProps } from '../navigation/HomeNavigator';

const filmes = [
    { id: 1, titulo: 'Os Vingadores', imagem: require('../images/avengers.jpg') },
    { id: 2, titulo: 'Atlas', imagem: require('../images/Atlas.jpg') },
    { id: 3, titulo: 'Bad Boys', imagem: require('../images/BadBoys.jpg') },
    { id: 4, titulo: 'Danificado', imagem: require('../images/damaged.jpg') },
    { id: 5, titulo: 'Desespero Profundo', imagem: require('../images/desesperoProfundo.jpg') },
    { id: 6, titulo: 'Duna 2', imagem: require('../images/Dune2.jpg') },
    { id: 7, titulo: 'Godzilla e Kong: O Novo Império', imagem: require('../images/godzilla.jpg') },
    { id: 8, titulo: 'Imaculada', imagem: require('../images/imaculada.jpg') },
    { id: 9, titulo: 'Kung Fu Panda 4', imagem: require('../images/kungfuPanda4.jpg') },
    { id: 10, titulo: 'Mad Max: Estrada da Fúria', imagem: require('../images/madmax.jpg') },
    { id: 11, titulo: 'Oppenheimer', imagem: require('../images/oppenheimer.jpg') },
    { id: 12, titulo: 'Os Três Mosqueteiros: Milady ', imagem: require('../images/os3mosqueteiros.jpg') },
    { id: 13, titulo: 'Rebel Moon: Corte do Diretor', imagem: require('../images/RebelMoon2.jpg') },
    { id: 14, titulo: '1917 - O Tempo é o Maior Inimigo', imagem: require('../images/1917.jpg') },
    { id: 15, titulo: 'O Dublê', imagem: require('../images/TheFallGuy.jpg') },
    { id: 16, titulo: 'Uma Vida de Esperança', imagem: require('../images/umaVidaDeEsperança.jpg') },
    { id: 17, titulo: 'Minions 2: A Origem de Gru', imagem: require('../images/minions2.jpg') },
    { id: 18, titulo: 'Divertidamente 2', imagem: require('../images/divertidamente2.jpg') },
    { id: 19, titulo: 'Terrifier 3', imagem: require('../images/terrifier3.jpg') },
    { id: 20, titulo: 'Até o Último Homem', imagem: require('../images/ateOUltimoHomem.jpg') },
    { id: 21, titulo: 'Invencível', imagem: require('../images/invencivel.jpg') },
    { id: 22, titulo: 'Ainda Estou Aqui', imagem: require('../images/aindaEstouAqui.jpg') },
    { id: 23, titulo: 'Titanic', imagem: require('../images/titanic.jpg') },
];

// ids dos filmes por categoria
const filmesAcaoAventura = [3, 4, 7, 10, 15, 12, 13];
const filmesFiccaoCientifica = [2, 6, 13];
const filmesAnimacao = [9, 17, 18];
const filmesTerrorSuspense = [5, 8, 19];
const filmesGuerraHistorico = [14, 20, 21];
const filmesDrama = [16, 22, 23];

const renderCategoria = (titulo: string, ids: number[]) => (
    <>
        <Text style={{ marginTop: 15, fontFamily: 'fantasy', color: 'white', fontSize: 20, marginBottom: 10, alignSelf: 'flex-start', fontWeight: 'bold' }}>{titulo}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10 }}>
            {filmes
                .filter(filme => ids.includes(filme.id))
                .map(filme => (
                    <Pressable key={filme.id} style={{ marginRight: 12 }}>
                        <Image
                            source={filme.imagem}
                            style={{ width: 120, height: 180, borderRadius: 8 }}
                            resizeMode="cover"
                        />
                        <Text style={{ fontSize: 16, fontFamily: 'Arial', color: 'white', textAlign: 'center', marginTop: 8, width: 120 }}>{filme.titulo}</Text>
                    </Pressable>
                ))}
        </ScrollView>
    </>
);

const TelaEscolherFilme = ({ navigation }: EscolherFilmeProps) => {
    const filmeDestaqueFiccaoCientifica = filmes.find(filme => filme.id === 11);
    const filmeDestaqueSuperHerois = filmes.find(filme => filme.id === 1);
    const [menuVisivel, setMenuVisivel] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            {/* Navbar */}
            <View style={{
                width: '100%',
                height: 60,
                backgroundColor: '#0F1112',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingHorizontal: 20,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 10
            }}>
                <Pressable onPress={() => setMenuVisivel(true)}>
                    <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 23, height: 2, backgroundColor: 'white', marginVertical: 2 }} />
                        <View style={{ width: 23, height: 2, backgroundColor: 'white', marginVertical: 2 }} />
                        <View style={{ width: 23, height: 2, backgroundColor: 'white', marginVertical: 2 }} />
                    </View>
                </Pressable>
                <Text style={{ color: 'white', fontSize: 20, marginLeft: 16, fontWeight: 'bold', fontFamily: 'fantasy' }}>
                    CINEMAX
                </Text>
            </View>

            {/* menu lateral */}
            <Modal
                visible={menuVisivel}
                transparent
                animationType="fade"
                onRequestClose={() => setMenuVisivel(false)}
            >
                <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} onPress={() => setMenuVisivel(false)}>
                    <View style={{
                        width: 220,
                        height: '100%',
                        backgroundColor: '#222',
                        paddingTop: 60,
                        paddingHorizontal: 20,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        elevation: 20,
                    }}>

                        {/* COLOCAR TELAS RESTANTES AQUI */}
                        <Text style={{ fontFamily: 'fantasy', color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 30, marginTop: -15 }}>Menu</Text>
                        <Pressable onPress={() => { setMenuVisivel(false); navigation.navigate('TelaInicio'); }}>
                            <Text style={{ fontFamily: 'fantasy', color: 'white', fontSize: 18, marginBottom: 20 }}>Início</Text>
                        </Pressable>
                        <Pressable onPress={() => { setMenuVisivel(false); navigation.navigate('TelaCadVenda'); }}>
                            <Text style={{ fontFamily: 'fantasy', color: 'white', fontSize: 18, marginBottom: 20 }}>Cadastrar Venda</Text>
                        </Pressable>
                        <Pressable onPress={() => { setMenuVisivel(false); navigation.navigate('TelaAltVenda', { id: '1' }); }}>
                            <Text style={{ fontFamily: 'fantasy', color: 'white', fontSize: 18, marginBottom: 20 }}>Alterar Venda</Text>
                        </Pressable>
                        <Pressable onPress={() => { setMenuVisivel(false); navigation.navigate('TelaAltLanche', { id: '1' }); }}>
                            <Text style={{ fontFamily: 'fantasy', color: 'white', fontSize: 18, marginBottom: 20 }}>Alterar Lanche</Text>
                        </Pressable>
                        <Pressable onPress={() => { setMenuVisivel(false); navigation.navigate('TelaConsLanches'); }}>
                            <Text style={{ fontFamily: 'fantasy', color: 'white', fontSize: 18, marginBottom: 20 }}>Consultar Lanches</Text>
                        </Pressable>
                        <Pressable onPress={() => { setMenuVisivel(false); navigation.navigate('TelaConsVenda'); }}>
                            <Text style={{ fontFamily: 'fantasy', color: 'white', fontSize: 18, marginBottom: 20 }}>Consultar Vendas</Text>
                        </Pressable>
                        <Pressable onPress={() => setMenuVisivel(false)}>
                            <Text style={{ fontFamily: 'Arial', color: 'red', fontSize: 20, marginTop: 40, fontWeight: 'bold' }}>Fechar</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>

            {/* telas */}
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    padding: 16,
                    paddingTop: 75,
                    paddingBottom: 100
                }}
            >
                {filmeDestaqueSuperHerois && (
                    <View style={{ marginBottom: 30, alignItems: 'center' }}>
                        <Image
                            source={filmeDestaqueSuperHerois.imagem}
                            style={{ marginTop: 18, width: 380, height: 200, borderRadius: 8 }}
                            resizeMode="cover"
                        />
                        <Text style={{ fontFamily: 'fantasy', textAlign: 'center', marginTop: 10, fontSize: 25, fontWeight: 'bold', color: 'white' }}>
                            {filmeDestaqueSuperHerois.titulo}
                        </Text>
                    </View>
                )}

                {renderCategoria('Ação e Aventura', filmesAcaoAventura)}
                {renderCategoria('Ficção Científica', filmesFiccaoCientifica)}

                {filmeDestaqueFiccaoCientifica && (
                    <View style={{ marginTop: 35, marginBottom: 20, alignItems: 'center' }}>
                        <Image
                            source={filmeDestaqueFiccaoCientifica.imagem}
                            style={{ width: 380, height: 200, borderRadius: 8 }}
                            resizeMode="cover"
                        />
                        <Text style={{ fontFamily: 'fantasy', textAlign: 'center', marginTop: 10, fontSize: 25, fontWeight: 'bold', color: 'white' }}>
                            {filmeDestaqueFiccaoCientifica.titulo}
                        </Text>
                    </View>
                )}

                {renderCategoria('Animação', filmesAnimacao)}
                {renderCategoria('Terror e Suspense', filmesTerrorSuspense)}
                {renderCategoria('Guerra / Histórico', filmesGuerraHistorico)}
                {renderCategoria('Drama', filmesDrama)}
            </ScrollView>


            <Pressable
                style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: 'white',
                    paddingVertical: 16,
                    borderRadius: 30,
                    alignItems: 'center',
                    elevation: 5,
                }}
                onPress={() => { navigation.navigate('assentos') }}>

                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
                    COMPRE AQUI SEU INGRESSO
                </Text>
            </Pressable>
        </View>
    );
};

export default TelaEscolherFilme;