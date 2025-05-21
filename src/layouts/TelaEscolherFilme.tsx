import React from 'react';
import { Pressable, Image, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/styles';

const filmes = [
    // ARRUMAR PARA FICAR MAIOR   { id: 2, titulo: 'Os Vingadores', imagem: require('../images/avengers.jpg') },
    { id: 2, titulo: 'Atlas', imagem: require('../images/Atlas.jpg') },
    { id: 3, titulo: 'Bad Boys', imagem: require('../images/BadBoys.jpg') },
    { id: 4, titulo: 'Danificado', imagem: require('../images/damaged.jpg') },
    { id: 5, titulo: 'Desespero Profundo', imagem: require('../images/desesperoProfundo.jpg') },
    { id: 6, titulo: 'Duna 2', imagem: require('../images/Dune2.jpg') },
    { id: 7, titulo: 'Godzilla e Kong: O Novo Império', imagem: require('../images/godzilla.jpg') },
    { id: 8, titulo: 'Imaculada', imagem: require('../images/imaculada.jpg') },
    { id: 9, titulo: 'Kung Fu Panda 4', imagem: require('../images/kungfuPanda4.jpg') },
    { id: 10, titulo: 'Mad Max: Estrada da Fúria', imagem: require('../images/madmax.jpg') },
    // ARRUMAR PARA FICAR MAIOR { id: 11, titulo: 'Oppenheimer', imagem: require('../images/oppenheimer.jpg') },
    { id: 12, titulo: 'Os Três Mosqueteiros: Milady ', imagem: require('../images/os3mosqueteiros.jpg') },
    { id: 13, titulo: 'Rebel Moon - Parte 2: Corte do Diretor', imagem: require('../images/RebelMoon2.jpg') },
    { id: 14, titulo: '1917 - O Tempo é o Maior Inimigo', imagem: require('../images/tempoÉInimigo1917.jpg') },
    { id: 15, titulo: 'O Dublê', imagem: require('../images/TheFallGuy.jpg') },
    { id: 16, titulo: 'Uma Vida de Esperança', imagem: require('../images/umaVidaDeEsperança.jpg') },

];

const TelaEscolherFilme = () => {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 16 }}>
            <Text style={{ fontSize: 24, marginBottom: 16 }}>Escolha um filme</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filmes.map(filme => (
                    <Pressable key={filme.id} style={{ margin: 10 }}>
                        <Image
                            source={filme.imagem}
                            style={{ width: 120, height: 180, borderRadius: 8 }}
                            resizeMode="cover"
                        />
                        <Text style={{ textAlign: 'center', marginTop: 8 }}>{filme.titulo}</Text>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
};

export default TelaEscolherFilme;