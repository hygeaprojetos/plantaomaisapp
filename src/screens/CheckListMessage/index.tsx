import React from "react";

import { Container, BoxTitle, Title, SubTitle, Description } from "./styles";

import { Button } from "../../components/Button";
import { ContainerButton } from "../Cadaster/CaptureName/styles";

import { useNavigation,RouteProp, useRoute } from "@react-navigation/native";

type RouteDetailParams = {
  AttachmentsCadaster: {
    nome: string;
    telefone: string;
    email: string;
    dataNascimento: string;
    cpf: string;
    estado: string;
    sexo: string;
    endereco: string;
    estadoCivil: string;
    numero: string;
    cep: string;
    complemento: string;
    especialidade: string;
    cidade: string;
    numeroCrm: string;
    estadoCrm: string;
    emissorCrm: string;
  };
};

export type DoctorRouteProp = RouteProp<RouteDetailParams, "AttachmentsCadaster">;

export function CheckListMessage() {

  const navigation = useNavigation()

  const route = useRoute<DoctorRouteProp>();
  const preCadastro = route.params;

  return (
    <Container>
      <BoxTitle>
        <Title>Prontinho</Title>
        <SubTitle>
          Tenha alguns{"\n"}
          documentos em mãos{" "}
        </SubTitle>
        <Description>
          Para começar, você precisa{"\n"}
          ter alguns documentos em mãos,{"\n"}
          preparamos um checklist para{"\n"}
          te guiar e facilitar seu cadastro.
        </Description>
      </BoxTitle>

      <ContainerButton>
        <Button onPress={() => navigation.navigate("CheckListDocument", preCadastro)} colorBackground="white" title="Vamos lá" />
      </ContainerButton>
    </Container>
  );
}
