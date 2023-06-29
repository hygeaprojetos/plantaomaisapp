import React from "react";

import {
  Container,
  ContainerModal,
  Title,
  Description,
  ContainerButton,
  TextButton,
  ContainerDescription,
} from "./styles";

import { Image, ActivityIndicator } from "react-native";

interface Props {
  onClosed: () => void;
  title: string;
  description: string;
  textButton: string | any;
  photo?: any;
}

export function ModalPopUp({
  onClosed,
  title,
  description,
  textButton,
  photo,
}: Props) {
  return (
    <Container onPress={onClosed}>
      <Image
        style={{ flex: 1, width: "100%", height: "100%", marginBottom: -20 }}
        source={photo}
      />
      <ContainerModal>
        <Title>{title}</Title>
        <ContainerDescription>
          <Description>{description}</Description>
        </ContainerDescription>
        <ContainerButton onPress={() => {}}>
          <TextButton>{textButton}</TextButton>
        </ContainerButton>
      </ContainerModal>
    </Container>
  );
}
