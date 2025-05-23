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
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    marginTop: 50,
    textAlign: 'center'
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

  filmeBotao: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
    alignItems: 'center',
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

  Cadastrar: {
    backgroundColor: 'green',
    alignItems: 'flex-start',
    marginTop: 10,
    padding: 10,
    borderRadius: 5
  },
  Excluir: {
    backgroundColor: 'red',
    alignItems: 'flex-end',
    marginTop: 10,
    padding: 10,
    borderRadius: 5
  },

  tituloRadio: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  titulo_campos: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagem: {
    width: 100,
    height: 100,
    marginTop: 20
  },







  containerFundo: {
    flex: 1,
    backgroundColor: 'black'
  },
  topoIconeBox: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },

  topoIcone: {
    width: 105,
    height: 105,
  },
  topoLegenda: {
    color: 'white',
    fontFamily: 'fantasy',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center'
  },
  containerInterno: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'transparent'
  },

  subtitulo: {
    marginTop: 30,
    color: 'white',
    fontFamily: 'fantasy',
    fontSize: 20,
    textAlign: 'center'
  },
  produtoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#D14708',
    backgroundColor: '#fff'
  },
  produtoBoxInfo: {
    flex: 1
  },
  produtoNome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d2691e'
  },
  produtoDescricao: {
    color: '#888',
    marginVertical: 2,
    fontSize: 16,
    fontWeight: 'bold'
  },
  produtoPreco: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d2691e'
  },
  produtoBtn: {
    width: 22,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 2,
    backgroundColor: '#fff'
  },
  produtoBtnPressed: {
    backgroundColor: '#eee'
  },
  produtoBtnTexto: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  produtoInputBox: {
    width: 39,
    height: 38,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 2
  },
  produtoInput: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white'
  },
  totalPipoca: {
    textAlign: 'right',
    color: 'white',
    fontSize: 18,
    marginTop: 40
  },
  totalRefri: {
    color: 'white',
    textAlign: 'right',
    fontSize: 18
  },
  totalGeral: {
    color: '#00DE01',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 23,
    marginTop: 10
  },
  botoesCadastrarBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 5
  },

  btnCadastrar: {
    backgroundColor: '#D14708',
    paddingVertical: 14,
    paddingHorizontal: 38,
    borderRadius: 8,
    minWidth: 130,
    alignItems: 'center',
    marginHorizontal: 8,
  },

  btnCadastrarTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  btnPressed: {
    opacity: 0.7
  },

  botoesSecundariosBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  btnPular: {
    backgroundColor: '#888',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 90,
    alignItems: 'center',
    marginHorizontal: 8,
  },

  btnCancelar: {
    backgroundColor: '#888',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 90,
    alignItems: 'center',
    marginHorizontal: 8,
  },

  btnSecundarioTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

});