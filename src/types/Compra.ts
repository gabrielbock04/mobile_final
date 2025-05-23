import { Filme } from "./Filme";

type Compra = {
  filmeSelecionado: Filme;
  assentosSelecionados: number[];
  dataSelecionada: string;
  horarioSelecionado: string;
  valorLanche?: number; 
};

const filmePadrao: Filme = {
  nome: "Filme Padrão",
  preco: 10,
};

const dataPadrao = "2025-05-22";
const horarioPadrao = "19:00";

let compra: Compra = {
  filmeSelecionado: filmePadrao,
  assentosSelecionados: [],
  dataSelecionada: dataPadrao,
  horarioSelecionado: horarioPadrao,
};

export function setCompra(
  filme: Filme, 
  assentos: number[], 
  data: string, 
  horario: string
) {
  compra = { 
    filmeSelecionado: filme, 
    assentosSelecionados: assentos,
    dataSelecionada: data,
    horarioSelecionado: horario,
    valorLanche: compra.valorLanche, 
  };
}

export function atualizarCompra(dados: Partial<Compra>) {
  compra = { ...compra, ...dados };
}

export function getCompra(): Compra {
  return compra;
}
