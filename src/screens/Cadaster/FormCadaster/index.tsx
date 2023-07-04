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
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";

import banner from "../../../assets/banner.png";
import { InputCadaster } from "../../../components/Input/InputCadaster";
import { Button } from "../../../components/Button";
import { AuthContext } from "../../../context/AuthContext";
import { InputSelected } from "../../../components/Input/InputSelected";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../../routes/auth.routes";

type RouteDetailParams = {
  FormCadaster: {
      nameDoctor: string;
      email: string;
      phone: string;
      numeroIdentificacao: string;
      numeroCrm: string;
      itemSelect: {
        estadocrm: string;
      };
  };
};

export type DoctorRouteProp = RouteProp<RouteDetailParams, "FormCadaster">;

export function FormCadaster() {
  const { signUp } = useContext(AuthContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const route = useRoute<DoctorRouteProp>();
  const preCadastro = route.params;

  console.log(preCadastro?.itemSelect.estadocrm)

  /* const emailField = preCadastro.response.email
  const nameField = preCadastro.response.nome */

  const [name, setName] = useState(preCadastro.nameDoctor);
  const [email, setEmail] = useState(preCadastro.email);
  const [phone, setPhone] = useState(preCadastro.phone);
  const [rg, setRg] = useState('');
  const [numberIndentify, setNumberIndentify] = useState(preCadastro.numeroIdentificacao);
  const [date, setDate] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [numberCrm, setNumberCrm] = useState(preCadastro.numeroCrm);
  const [emissaoCrm, setEmissaoCrm] = useState("");
  const [cnes, setCnes] = useState("");
  const [curso, setCurso] = useState("");
  const [location, setLocation] = useState("");

  async function handleNext() {
    navigation.navigate("CheckListMessage");
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
            placeholder="Seu Nome"
          />
          <InputCadaster
            value={email}
            onChangeText={setEmail}
            title="E-mail*"
            placeholder='Digite seu melhor e-mail'
          />
          <InputCadaster
            value={phone}
            onChangeText={setPhone}
            title="Telefone*"
            placeholder="(00) 0 0000-000"
          />
          <InputCadaster
            value={rg}
            onChangeText={setRg}
            title="RG*"
            placeholder="Digite seu RG"
          />
          <InputCadaster
            value={numberIndentify}
            onChangeText={setNumberIndentify}
            title="Número de identificação*"
            placeholder="Digite seu CPF"
          />
          <InputCadaster
            value={date}
            onChangeText={setDate}
            title="Data de nascimento*"
            placeholder="10/10/1999"
          />
          <InputCadaster
            value={naturalidade}
            onChangeText={setNaturalidade}
            title="Naturalidade*"
            placeholder="Naturalidade"
          />
          <InputSelected
            title="Estado civil*"
            textSelect="Selecione seu estado civil"
          />
          <InputSelected title="Sexo*" textSelect="Selecione o sexo" />
          <InputCadaster
            value={cep}
            onChangeText={setCep}
            title="CEP*"
            placeholder="CEP"
          />
          <InputCadaster
            value={endereco}
            onChangeText={setEndereco}
            title="Endereço*"
            placeholder="Endereço"
          />
          <InputCadaster
            value={number}
            onChangeText={setNumber}
            title="Número*"
            placeholder="Endereço"
          />
          <InputSelected title="Estado*" textSelect={preCadastro?.itemSelect.estadocrm } />
          <InputCadaster
            value={city}
            onChangeText={setCity}
            title="Cidade*"
            placeholder="Cidade"
          />
          <InputCadaster
            value={numberCrm}
            onChangeText={setNumberCrm}
            title="Número CRM*"
            placeholder="Numero CRM"
          />
          <InputSelected title="Estado CRM*" textSelect="Estado CRM" />
          <InputCadaster
            value={emissaoCrm}
            onChangeText={setEmissaoCrm}
            title="Emissão CRM*"
            placeholder="10/12/2019"
          />
          <InputCadaster
            value={cnes}
            onChangeText={setCnes}
            title="Número CNES*"
            placeholder="Número CNES"
          />
          <InputSelected
            title="Especialidade*"
            textSelect="Selecione a especialidade"
          />
          <InputSelected title="Curso*" textSelect="Selecione o curso" />
          <InputSelected
            title="É funcionário público concursado?*"
            textSelect="Selecione"
          />
          <InputCadaster
            value={location}
            onChangeText={setLocation}
            title="Qual local atua?*"
            placeholder="Nome do local"
          />

          <Button title="Avançar" onPress={handleNext} />
        </ContainerFormInput>
      </ScrollView>
    </Container>
  );
}
