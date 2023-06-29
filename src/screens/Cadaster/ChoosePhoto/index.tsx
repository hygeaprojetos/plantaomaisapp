import React, { useState } from "react";

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

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function ChoosenPhoto() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [visibleBorder, setVisibleBorder] = useState<any>("not");

  const openCamera = () => {
    if (visibleBorder === "photo") {
      // navigation.navigate("CameraPhoto");
      alert('em teste')
    } else navigation.navigate("FormCadaster")
  };

  return (
    <Container>
      <BoxCam onPress={() => setVisibleBorder("photo")}>
        {visibleBorder === "photo" ? (
          <>
            <IconCam source={cam} />
            <Title style={{ color: "#01926D" }}>Tirar uma foto</Title>
            <Description>Prefiro tirar uma foto nova!</Description>
          </>
        ) : (
          <>
            <IconCam source={cam} />
            <Title>Tirar uma foto</Title>
            <Description>Prefiro tirar uma foto nova!</Description>
          </>
        )}
      </BoxCam>

      <BoxGalery onPress={() => setVisibleBorder("galery")}>
        {visibleBorder === "galery" ? (
          <>
            <IconGalery source={galery} />
            <Title style={{ color: "#01926D" }}>Escolher da galeria</Title>
            <Description>
              Já tenho uma foto preparada{"\n"}
              para a ocasião.
            </Description>
          </>
        ) : (
          <>
            <IconGalery source={galery} />
            <Title>Escolher da galeria</Title>
            <Description>
              Já tenho uma foto preparada{"\n"}
              para a ocasião.
            </Description>
          </>
        )}
      </BoxGalery>

      <ContainerButton>
        {visibleBorder === "not" ? (
          <Button
            type="disabled"
            onPress={() => alert("teste")}
            title="Próximo"
          />
        ) : (
          <Button onPress={() => openCamera()} title="Próximo" />
        )}
      </ContainerButton>
    </Container>
  );
}
