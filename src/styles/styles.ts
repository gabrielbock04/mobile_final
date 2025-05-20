import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  telaBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#242333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
  },

  image: {
    width: 490,
    height: 490,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 15,
  },

  titulo: {
    marginTop: 60,
    color: '#fff',
    fontSize: 34,
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  descricao: {
    fontSize: 21,
    color: '#fff',
    marginTop: -15,
    fontFamily: 'fantasy',
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 55,
  },

  texto_botao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'fantasy',
  },

  botaoEntrar: {
    backgroundColor: '#D14708',
    padding: 15,
    borderRadius: 10,
    width: '83%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },

  click: {
    opacity: 0.5,
  },

  tela: {
    width: '80%',
    height: 30,
    backgroundColor: '#fff',
    marginBottom: 20,
    transform: [{ rotateX: '45deg' }],
  },
  assento: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#444',
  },
  ocupado: {
    backgroundColor: '#999',
    borderColor: '#333',
  },
  selecionado: {
    backgroundColor: '#6c6',
    borderColor: '#393',
  },

  resumo: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
  destaque: {
    color: '#6feaf6',
    fontWeight: 'bold',
  },
  filmesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginVertical: 10,
  },

  filmeSelecionado: {
    backgroundColor: '#aaa',
  },

  filmeTexto: {
    color: '#000',
    fontSize: 14,
  },

});