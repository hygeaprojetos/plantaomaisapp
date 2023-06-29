import React, { useState } from "react";

import {
  Container,
  ContainerHeader,
  Title,
  SubTitle,
  PhotoUser,
  Banner,
  ContainerBanner,
  ContainerFormInput,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import banner from "../../../assets/banner.png";

import { InputCadaster } from "../../../components/Input/InputCadaster";
import { Button } from "../../../components/Button";
import { ScrollView } from "react-native";

export function FormCadaster() {

  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rg, setRg] = useState("");
  const [numberIndentify, setNumberIndentify] = useState("");
  const [date, setDate] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [sexo, setSexo] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [numberCrm, setNumberCrm] = useState("");
  const [emissaoCrm, setEmissaoCrm] = useState("");
  const [cnes, setCnes] = useState("");
  const [curso, setCurso] = useState("");
  const [location, setLocation] = useState("");

  function handleNext() {
    navigation.navigate("VerificationCode");
  }

  return (
    <Container>
      <ScrollView>
        <ContainerHeader>
          <Title>
            Vamos iniciar{"\n"}
            <SubTitle>o Pré-cadastro</SubTitle>
          </Title>
          <PhotoUser></PhotoUser>
        </ContainerHeader>

        <ContainerBanner>
          <Banner source={banner} />
        </ContainerBanner>

        <ContainerFormInput>
          <InputCadaster title="Nome completo*" />
          <InputCadaster title="E-mail*" />
          <InputCadaster title="Telefone*" />
          <InputCadaster title="RG*" />
          <InputCadaster title="Número de identificação*" />
          <InputCadaster title="Data de nascimento*" />
          <InputCadaster title="Naturalidade*" />
          <InputCadaster title="Estado civil*" />
          <InputCadaster title="Sexo*" />
          <InputCadaster title="CEP*" />
          <InputCadaster title="Endereço*" />
          <InputCadaster title="Número*" />
          <InputCadaster title="Estado*" />
          <InputCadaster title="Cidade*" />
          <InputCadaster title="Número CRM*" />
          <InputCadaster title="Estado CRM*" />
          <InputCadaster title="Emissão CRM*" />
          <InputCadaster title="Número CNES*" />
          <InputCadaster title="É funcionário público concursado?*" />
          <InputCadaster title="Qual local atua?*" />

          <Button title="Avançar" onPress={handleNext} />
        </ContainerFormInput>
      </ScrollView>
    </Container>
  );
}
