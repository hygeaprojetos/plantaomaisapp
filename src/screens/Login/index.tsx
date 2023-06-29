import React, { useState, useContext } from "react";

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

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/AuthContext";
import { TextInput } from "react-native";
import { BoxInput } from "../Cadaster/CaptureName/styles";

export function Login() {
  const { signIn } = useContext(AuthContext);

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email === "" || password === "") {
      alert("ok");
    }
    await signIn({ email, password });
  }

  return (
    <Container>
      <Logo source={logo} />

      <Title>Bem vindo!</Title>
      <Description>Faça login para continuar</Description>

      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Senha"
        type="password"
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={handleLogin} title="Acessar" />

      <ContainerAccountText onPress={() => navigation.navigate("Start")}>
        <TextNotAccount>Não tem conta? </TextNotAccount>
        <TextCadasterAccount>Cadastrar</TextCadasterAccount>
      </ContainerAccountText>
    </Container>
  );
}
