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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../../routes/auth.routes";

interface NameProps {
  name: string;
}

export function CapturedName() {

  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [name, setName] = useState<any>();

  function handleNext() {
    navigation.navigate("ConfirmName", { name });
  }

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
          onPress={handleNext}
          title="Confirmar"
          type={name === undefined ? "disabled" : null}
        />
      </ContainerButton>
    </Container>
  );
}
