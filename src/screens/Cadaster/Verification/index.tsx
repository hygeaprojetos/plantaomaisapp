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
    especialidade: string
  };
};

export type DoctorRouteProp = RouteProp<RouteDetailParams, "VerificationCode">;

export function VerificationCode() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const route = useRoute<DoctorRouteProp>();
  const preCadastro = route.params;

  console.log("[EMAIL] =>", preCadastro);

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
      /* const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhc3NAZ21haWwuY29tIiwibmFtZSI6InNhc2FzYSIsInBob25lIjoiMjEyMSIsImlhdCI6MTY4ODY0MDUxNCwiZXhwIjoxNjg5MjQ1MzE0fQ.648jfCJunmwzPmatHyZx-W9sR09nLP7YuMJKSo5MUCs" */

      const data = {
        email: preCadastro.email,
        codigo: Object.values(inputs).join(""),
      };

      const response = await fetch(`${host}/doctor/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `${token}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("TESTE []", responseData);

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
          {preCadastro.email}{"\n"}
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
