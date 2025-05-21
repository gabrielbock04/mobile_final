import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Pressable } from 'react-native';
import { styles } from '../styles/styles';


interface Filme {
  nome: string;
  preco: number;
}

interface PagamentoProps {
  filmeSelecionado: Filme;
  assentosSelecionados: number[];
  onFinalizarCompra: () => void;

}

const Pagamento = ({ filmeSelecionado, assentosSelecionados, onFinalizarCompra }: PagamentoProps) => {
  const [pagando, setPagando] = useState(false);

  const valorTotal = assentosSelecionados.length * filmeSelecionado.preco;

  function finalizarPagamento() {
    if (pagando) return;
    setPagando(true);

    setTimeout(() => {
      Alert.alert("Pagamento realizado com sucesso!");
      setPagando(false);
      onFinalizarCompra(); // Callback para limpar/resetar compra
    }, 3000);













  }
};

export default Pagamento;
