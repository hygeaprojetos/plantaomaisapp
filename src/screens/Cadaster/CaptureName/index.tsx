import React, { useState } from "react";

import {
  Container,
  Icon,
  Title,
  BoxInput,
  TextInput,
  ContainerButton,
} from "./styles";

import { Button } from "../../../components/Button";

import { useNavigation } from "@react-navigation/native";

export function CapturedName() {

  const navigation = useNavigation()

  const [name, setName] = useState<any>("");

  return (
    <Container>
      <Icon>😃</Icon>
      <Title>Como podemos{"\n"}chamar o Dr(a)</Title>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
        placeholderTextColor="#5C6660"
      />
      <BoxInput></BoxInput>

      <ContainerButton>
        <Button
        onPress={() => navigation.navigate("ConfirmName")}
        title="Confirmar" type={name <= 0 ? "disabled" : null} />
      </ContainerButton>
    </Container>
  );
}
