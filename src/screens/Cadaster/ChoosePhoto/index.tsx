import React from "react";

import {
  Container,
  BoxCam,
  BoxGalery,
  IconCam,
  IconGalery,
  Title,
  Description,
} from "./styles";

import cam from "../../../assets/cam.png";
import galery from "../../../assets/galery.png";

import { Button } from "../../../components/Button";
import { ContainerButton } from "../ConfirmName/styles";

export function ChoosenPhoto() {
  return (
    <Container>
      <BoxCam>
        <IconCam source={cam} />
        <Title>Tirar uma foto</Title>
        <Description>Prefiro tirar uma foto nova!</Description>
      </BoxCam>

      <BoxGalery>
        <IconGalery source={galery} />
        <Title>Escolher da galeria</Title>
        <Description>
          Já tenho uma foto preparada{"\n"}
          para a ocasião.
        </Description>
      </BoxGalery>

      <ContainerButton>
        <Button title="Próximo" />
      </ContainerButton>
    </Container>
  );
}
