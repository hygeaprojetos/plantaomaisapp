import React from "react";

import {
  Container,
  ContainerHeader,
  Title,
  SubTitle,
  PhotoUser,
  Banner,
  ContainerBody
} from "./styles";

import banner from '../../../assets/banner.png'

export function FormCadaster() {
    
  return (
    <Container>
      <ContainerHeader>
        <Title>
          Vamos iniciar{"\n"}
          <SubTitle>o Pré-cadastro</SubTitle>
        </Title>
        <PhotoUser></PhotoUser>
      </ContainerHeader>

        <ContainerBody>
        <Banner source={banner}/>
        </ContainerBody>
    </Container>
  );
}
