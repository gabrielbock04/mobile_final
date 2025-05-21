import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaInicio from "../layouts/TelaInicio";
import SelecionarAssentos from "../components/assentos";
import CadastroFilme from "../components/cadastroFilme";
import Pagamento from "../components/Pagamento";
import TelaEscolherFilme from "../layouts/TelaEscolherFilme";

//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined;
  TelaInicio: undefined;
  assentos: undefined;
  TelaEscolherFilme: undefined;

};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaEscolherFilme" //nome da tela inicial
      screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
    >

      {/* define uma tela dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaInicio" component={TelaInicio} />
      <Stack.Screen name="assentos" component={SelecionarAssentos} />
      <Stack.Screen name="TelaEscolherFilme" component={TelaEscolherFilme} />

    </Stack.Navigator>
  );
}

//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;

type InicioProps = NativeStackScreenProps<RootStackParamList,
  'TelaInicio'>;

type AssentosProps = NativeStackScreenProps<RootStackParamList,
  'assentos'>;

type EscolherFilmeProps = NativeStackScreenProps<RootStackParamList,
  'TelaEscolherFilme'>;



//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  InicioProps,
  AssentosProps,
  EscolherFilmeProps
};