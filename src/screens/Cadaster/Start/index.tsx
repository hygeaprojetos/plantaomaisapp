import React from "react";

import { Container, Title, Logo, Description, Play } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import logoBg from "../../../assets/logobg.png";

export function Start() {
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

      <Play>
        <AntDesign name="right" size={24} color="#fff" />
      </Play>
      
    </Container>
  );
}
