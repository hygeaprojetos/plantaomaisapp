import React from "react";

import {
  Container,
  Logo,
  Title,
  Description,
  ContainerAccountText,
  TextNotAccount,
  TextCadasterAccount,
} from "./styles";

import logo from "../../assets/logo.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <Container>
      <Logo source={logo} />

      <Title>Bem vindo!</Title>
      <Description>Faça login para continuar</Description>

      <Input placeholder="Email" />
      <Input placeholder="Senha" type="password" />

      <Button title="Acessar" />

      <ContainerAccountText>
        <TextNotAccount>Não tem conta? </TextNotAccount>
        <TextCadasterAccount>Cadastrar</TextCadasterAccount>
      </ContainerAccountText>
    </Container>
  );
}
