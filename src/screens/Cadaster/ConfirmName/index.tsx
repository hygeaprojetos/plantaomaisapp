import React from "react";

import {
  Container,
  Logo,
  TitleName,
  Description,
  ContainerButton,
} from "./styles";

import logo from "../../../assets/logobg.png";

import { Button } from "../../../components/Button";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../../routes/auth.routes";

type RouteDetailParams = {
  ConfirmName: {
    name: string;
  };
};

export type DoctorRouteProp = RouteProp<RouteDetailParams, "ConfirmName">;

export function ConfirmName() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const route = useRoute<DoctorRouteProp>();
  const nameDoctor = route.params;

  return (
    <Container>
      <Logo source={logo} />

      <TitleName>Ok Dr(a) {nameDoctor.name}</TitleName>

      <Description>
        Agora precisamos tirar uma foto para{"\n"}deixar seu cadastro mais
        completo!
      </Description>

      <ContainerButton>
        <Button
          onPress={() => navigation.navigate("ChoosenPhoto")}
          title="Vamos lá"
        />
      </ContainerButton>
    </Container>
  );
}
