import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaInicio from "../layouts/TelaInicio";
import SelecionarAssentos from "../components/assentos";
import CadastroFilme from "../components/cadastroFilme";
import Pagamento from "../components/Pagamento";
import TelaEscolherFilme from "../layouts/TelaEscolherFilme";
import TelaCompraLanche from "../layouts/TelaCompraLanche";
import TelaConsLanches from "../layouts/TelaConsLanches";
import TelaAltLanche from "../layouts/TelaAltLanche";
import IngressoFinal from "../components/IngressoFinal";
import TelaAltVenda from "../layouts/TelaAltVenda";
import TelaCadVenda from "../layouts/TelaCadVenda";
import TelaConsVenda from "../layouts/TelaConsVenda";


//Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined;
  TelaInicio: undefined;
  assentos: undefined;
  TelaEscolherFilme: undefined;
  Pagamento: undefined;
  TelaCompraLanche: undefined;
  TelaConsLanches: undefined;
  TelaAltLanche: { id: string };
  IngressoFinal: undefined;
  TelaConsVenda: undefined;
  TelaCadVenda: undefined;
  TelaAltVenda: { id: string };

};

//Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
//com o RootStackParamList definindo as telas da stack
const Stack = createNativeStackNavigator<RootStackParamList>();

//Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pagamento" //nome da tela inicial
      screenOptions={{ headerShown: false }} //headerShown define se o cabeçalho irá ser exibido
    >

      {/* define uma tela dando um nome(igual ao RootStackParamList) e qual o componente será carregado */}
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TelaInicio" component={TelaInicio} />
      <Stack.Screen name="assentos" component={SelecionarAssentos} />
      <Stack.Screen name="TelaEscolherFilme" component={TelaEscolherFilme} />
      <Stack.Screen name="TelaCompraLanche" component={TelaCompraLanche} />
      <Stack.Screen name="Pagamento" component={Pagamento} />
      <Stack.Screen name="TelaConsLanches" component={TelaConsLanches} />
      <Stack.Screen name="TelaAltLanche" component={TelaAltLanche} />
      <Stack.Screen name="IngressoFinal" component={IngressoFinal} />
      <Stack.Screen name="TelaAltVenda" component={TelaAltVenda} />
      <Stack.Screen name="TelaConsVenda" component={TelaConsVenda} />
      <Stack.Screen name="TelaCadVenda" component={TelaCadVenda} />

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

type PagamentoProps = NativeStackScreenProps<RootStackParamList,
  'Pagamento'>;

type ComprarLancheProps = NativeStackScreenProps<RootStackParamList,
  'TelaCompraLanche'>;

type ConsLanchesProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsLanches'>;

type AltLancheProps = NativeStackScreenProps<RootStackParamList,
  'TelaAltLanche'>;

type IngressoProps = NativeStackScreenProps<RootStackParamList,
  'IngressoFinal'>;

type ConsVendaProps = NativeStackScreenProps<RootStackParamList,
  'TelaConsVenda'>;

type CadVendaProps = NativeStackScreenProps<RootStackParamList,
  'TelaCadVenda'>;

type AltVendaProps = NativeStackScreenProps<RootStackParamList,
  'TelaAltVenda'>;

//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  InicioProps,
  AssentosProps,
  EscolherFilmeProps,
  PagamentoProps,
  ComprarLancheProps,
  ConsLanchesProps,
  AltLancheProps,
  IngressoProps,
  AltVendaProps,
  CadVendaProps,
  ConsVendaProps
};