import React from "react";

import { Container, Title, Description, Check } from "./styles";

import check from '../../../assets/check.png'

export function Attachments() {
  return (
    <Container>
      <Check source={check}/>
      <Title>Parabéns!!!</Title>
      <Description>
        Voce finalizou seu cadastro,{'\n'}
        nossa equipe está{'\n'}
        verificando para que possamos{'\n'}
        liberar a plataforma. {'\n'}{'\n'}
        Lorem ipsum dolor sit amet,{'\n'}
        consectetur adipiscing elit, sed do{'\n'}
        eiusmod tempor incididunt
      </Description>
    </Container>
  );
}