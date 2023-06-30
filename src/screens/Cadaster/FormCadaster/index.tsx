import React, { useState, useContext } from "react";

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

import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import banner from "../../../assets/banner.png";
import { InputCadaster } from "../../../components/Input/InputCadaster";
import { Button } from "../../../components/Button";
import { AuthContext } from "../../../context/AuthContext";

export function FormCadaster() {
  const navigation = useNavigation();

  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rg, setRg] = useState("");
  const [numberIndentify, setNumberIndentify] = useState("");
  const [date, setDate] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [numberCrm, setNumberCrm] = useState("");
  const [stateCrm, setStateCrm] = useState("");
  const [emissaoCrm, setEmissaoCrm] = useState("");
  const [cnes, setCnes] = useState("");
  const [curso, setCurso] = useState("");
  const [location, setLocation] = useState("");

  async function handleNext() {
    /* navigation.navigate("VerificationCode"); */

    let data: any = {
      name,
      email,
      phone,
      rg,
      numberIndentify,
      date,
      naturalidade,
      sexo,
      cep,
      endereco,
      number,
      state,
      city,
      numberCrm,
      emissaoCrm,
      cnes,
      curso,
      location,
    };

    await signUp(data);
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
          <InputCadaster
            value={name}
            onChangeText={setName}
            title="Nome completo*"
          />
          <InputCadaster
            value={email}
            onChangeText={setEmail}
            title="E-mail*"
          />
          <InputCadaster
            value={phone}
            onChangeText={setPhone}
            title="Telefone*"
          />
          <InputCadaster value={rg} onChangeText={setRg} title="RG*" />
          <InputCadaster
            value={numberIndentify}
            onChangeText={setNumberIndentify}
            title="Número de identificação*"
          />
          <InputCadaster
            value={date}
            onChangeText={setDate}
            title="Data de nascimento*"
          />
          <InputCadaster
            value={naturalidade}
            onChangeText={setNaturalidade}
            title="Naturalidade*"
          />
          <InputCadaster
            value={estadoCivil}
            onChangeText={setEstadoCivil}
            title="Estado civil*"
          />
          <InputCadaster value={sexo} onChangeText={setSexo} title="Sexo*" />
          <InputCadaster value={cep} onChangeText={setCep} title="CEP*" />
          <InputCadaster
            value={endereco}
            onChangeText={setEndereco}
            title="Endereço*"
          />
          <InputCadaster
            value={number}
            onChangeText={setNumber}
            title="Número*"
          />
          <InputCadaster
            value={state}
            onChangeText={setState}
            title="Estado*"
          />
          <InputCadaster value={city} onChangeText={setCity} title="Cidade*" />
          <InputCadaster
            value={numberCrm}
            onChangeText={setNumberCrm}
            title="Número CRM*"
          />
          <InputCadaster
            value={stateCrm}
            onChangeText={setStateCrm}
            title="Estado CRM*"
          />
          <InputCadaster
            value={emissaoCrm}
            onChangeText={setEmissaoCrm}
            title="Emissão CRM*"
          />
          <InputCadaster
            value={cnes}
            onChangeText={setCnes}
            title="Número CNES*"
          />
          <InputCadaster
            value={curso}
            onChangeText={setCurso}
            title="É funcionário público concursado?*"
          />
          <InputCadaster
            value={location}
            onChangeText={setLocation}
            title="Qual local atua?*"
          />

          <Button title="Avançar" onPress={handleNext} />
        </ContainerFormInput>
      </ScrollView>
    </Container>
  );
}
