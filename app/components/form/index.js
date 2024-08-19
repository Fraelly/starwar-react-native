import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
import ResultIMC from "../resultImc/";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha com peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function calcularImc() {
    return setImc((peso / (altura * altura)).toFixed(1));
  }

  function validarImc() {
    if (peso != null && altura != null) {
      calcularImc();
      setAltura(null);
      setPeso(null);
      setMessageImc("Seu Imc é: ");
      setTextButton("Calcular Novamente");
      return;
    } else {
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preenche Peso e Altura");
    }
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setAltura}
          value={altura}
          placeholder="Qual a sua altura?"
          keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setPeso}
          value={peso}
          placeholder="Qual é o sea peso?"
          keyboardType="numeric"
        />

        <Button onPress={() => validarImc()} title={textButton} />
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
