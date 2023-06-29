import React from "react";

import { Container, BoxTitle, Title, SubTitle, Description } from "./styles";

import { Button } from "../../components/Button";
import { ContainerButton } from "../Cadaster/CaptureName/styles";

import { useNavigation } from "@react-navigation/native";

export function CheckListMessage() {

  const navigation = useNavigation()

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
        <Button onPress={() => navigation.navigate("CheckListDocument")} colorBackground="white" title="Vamos lá" />
      </ContainerButton>
    </Container>
  );
}
