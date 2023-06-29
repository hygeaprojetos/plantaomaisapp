import React from "react";

import {
  Container,
  ContainerTitle,
  Title,
  Description,
  ContainerVerificationCode,
  Box,
  TextCode,
  ContainerTextAlert,
  TextAlert,
  ButtonText,
  StrongText,
  ContainerButton 
} from "./styles";

import { Button } from "../../../components/Button";

import { useNavigation } from "@react-navigation/native";

export function VerificationCode() {

  const navigation = useNavigation()

  return (
    <Container>

      <ContainerTitle>
        <Title>Código de verificação</Title>
        <Description>
          Acabamos de enviar um código de{'\n'}
          verificação de 4 dígitos para{'\n'}
          robert.fox@gmail.com.{'\n'}
          Digite o código na caixa abaixo{'\n'}
          para continuar.
        </Description>
      </ContainerTitle>

      <ContainerVerificationCode>
        <Box>
          <TextCode placeholder="1" placeholderTextColor="#C1BCCC"/>
        </Box>
        <Box>
          <TextCode placeholder="2" placeholderTextColor="#C1BCCC"/>
        </Box>
        <Box>
          <TextCode placeholder="9" placeholderTextColor="#C1BCCC"/>
        </Box>
        <Box>
          <TextCode placeholder="0" placeholderTextColor="#C1BCCC"/>
        </Box>
        <Box>
          <TextCode placeholder="7" placeholderTextColor="#C1BCCC"/>
        </Box>
      </ContainerVerificationCode>

      
        <ContainerTextAlert>
      <TextAlert>Não recebeu o código?
      </TextAlert>
        <ButtonText>
        <StrongText>Reenvia código</StrongText>
        </ButtonText>
        </ContainerTextAlert>
      <ContainerButton>
      <Button onPress={() => navigation.navigate("CheckListMessage")} title="Verificar"/>
      </ContainerButton>

    </Container>
  );
}
