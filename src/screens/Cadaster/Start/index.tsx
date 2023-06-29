import React from "react";

import { Container, Title, Logo, Description, Play } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import logoBg from "../../../assets/logobg.png";

import { useNavigation } from "@react-navigation/native";

export function Start() {
 
  const navigation = useNavigation()

  return (
    <Container>
      <Title>
        Gerencie{"\n"}
        seus plantões de{"\n"}
        forma fácil
      </Title>

      <Logo source={logoBg} />

      <Description>
        Candidatar-se a plantões, trocas,{"\n"}doações de plantões e escalas.
      </Description>

      <Play onPress={() => navigation.navigate("CapturedName")}>
        <AntDesign name="right" size={24} color="#fff" />
      </Play>
      
    </Container>
  );
}
