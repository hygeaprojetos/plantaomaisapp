import React, { useState } from "react";

import {
  Container,
  ContainerTitle,
  Title,
  Description,
  ContainerVerificationCode,
  Box,
  TextCode,
  ContainerTextAlert,
  TextAlert,
  ButtonText,
  StrongText,
  ContainerButton,
} from "./styles";

import { Button } from "../../../components/Button";

import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../../routes/auth.routes";

type RouteDetailParams = {
  VerificationCode: {
    nameDoctor: string;
    email: string;
    phone: string;
    numeroIdentificacao: string;
    numeroCrm: string;
    itemSelect: any;
  };
};

export type DoctorRouteProp = RouteProp<RouteDetailParams, "VerificationCode">;

type CodeProps = {
  email: "mateus@gmail.com.br";
  codigo: "6dant";
};

export function VerificationCode() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const route = useRoute<DoctorRouteProp>();
  const preCadastro = route.params;

 /*  console.log("[EMAIL] =>", preCadastro.email); */

  const [inputs, setInputs] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
  });

  const handleInputChange = (field, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const handleSendCode = async () => {

    if (Object.values(inputs).some((value) => value === '')) {
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    try {
      const host = "http://10.0.12.10:3001";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGV1c0BnbWFpbC5jb20uYnIiLCJuYW1lIjoibWF0ZXVzIiwicGhvbmUiOiI5MjAxOTIxIiwiaWF0IjoxNjg4NDkxMzMwLCJleHAiOjE2ODkwOTYxMzB9._U1lSzlx_Agg4E-HLdSfKTb4FqR8DTfRi3pIj65Vaoc";

      const data = {
        email: preCadastro.email,
        codigo: Object.values(inputs).join(""),
      };

      const response = await fetch(`${host}/doctor/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      //console.log("TESTE []", responseData);

      if (response.ok) {
        navigation.navigate("FormCadaster", preCadastro);
      } else {alert('CÓDIGO INVÁLIDO')}

      return responseData;
    } catch (error) {
      console.log("erro ao enviar código", error);
      throw error;
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Código de verificação</Title>
        <Description>
          Acabamos de enviar um código de{"\n"}
          verificação de 4 dígitos para{"\n"}
          robert.fox@gmail.com.{"\n"}
          Digite o código na caixa abaixo{"\n"}
          para continuar.
        </Description>
      </ContainerTitle>

      <ContainerVerificationCode>
        <Box>
          <TextCode
            value={inputs.code1}
            onChangeText={(value) => handleInputChange("code1", value)}
            maxLength={1}
            placeholder="1"
            placeholderTextColor="#C1BCCC"
          />
        </Box>
        <Box>
          <TextCode
            value={inputs.code2}
            onChangeText={(value) => handleInputChange("code2", value)}
            maxLength={1}
            placeholder="2"
            placeholderTextColor="#C1BCCC"
          />
        </Box>
        <Box>
          <TextCode
            value={inputs.code3}
            onChangeText={(value) => handleInputChange("code3", value)}
            maxLength={1}
            placeholder="9"
            placeholderTextColor="#C1BCCC"
          />
        </Box>
        <Box>
          <TextCode
            value={inputs.code4}
            onChangeText={(value) => handleInputChange("code4", value)}
            maxLength={1}
            placeholder="0"
            placeholderTextColor="#C1BCCC"
          />
        </Box>
        <Box>
          <TextCode
            value={inputs.code5}
            onChangeText={(value) => handleInputChange("code5", value)}
            maxLength={1}
            placeholder="7"
            placeholderTextColor="#C1BCCC"
          />
        </Box>
      </ContainerVerificationCode>

      <ContainerTextAlert>
        <TextAlert>Não recebeu o código?</TextAlert>
        <ButtonText>
          <StrongText>Reenvia código</StrongText>
        </ButtonText>
      </ContainerTextAlert>
      <ContainerButton>
        <Button onPress={handleSendCode} title="Verificar" />
      </ContainerButton>
    </Container>
  );
}
