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
  ContainerTitle,
  TitleInputs,
} from "./styles";

import { ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

import banner from "../../../assets/banner.png";
import { InputCadaster } from "../../../components/Input/InputCadaster";
import { InputSelected } from "../../../components/Input/InputSelected";
import { Button } from "../../../components/Button";
import { PickerCrm } from "../../../components/Picker";
import { estados } from "../../../utils/estados";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../../routes/auth.routes";

export type SelectedProps = {
  estadocrm: string;
};

type PreCadastroProps = {
  nameDoctor: string;
  email: string;
  phone: string;
  numeroIdentificacao: string;
  numeroCrm: string;
  itemSelect: any
};

export function FormPreCadaster() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberIndentify, setNumberIndentify] = useState("");
  const [numberCrm, setNumberCrm] = useState("");

  const [popUpVisible, setPopUpVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState<SelectedProps | undefined>();

  const estadosSiglas: SelectedProps[] = estados.map((estado) => ({
    estadocrm: estado.sigla,
  }));

  function handleChangeSelect(item: SelectedProps) {
    setItemSelect(item);
    setPopUpVisible(false);
  }
  function openModal() {
    setPopUpVisible(true);
  }

  function handleNext(){
    const _OBJECT: PreCadastroProps = {
      nameDoctor: name,
      email: email,
      phone: phone,
      numeroIdentificacao: numberIndentify,
      numeroCrm: numberCrm,
      itemSelect,
    };
    navigation.navigate("VerificationCode", _OBJECT)

    //console.log('doctor', _OBJECT.itemSelect)
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
            placeholder="Seu nome"
          />
          <InputCadaster
            value={email}
            onChangeText={setEmail}
            title="E-mail*"
            placeholder="Seiu melhor e-mail"
          />
          <InputCadaster
            value={phone}
            onChangeText={setPhone}
            title="Telefone*"
            placeholder="(00) 0 0000-0000"
          />
          <InputCadaster
            value={numberIndentify}
            onChangeText={setNumberIndentify}
            title="Número de identificação*"
            placeholder="Digite seu CPF"
          />
          <InputCadaster
            value={numberCrm}
            onChangeText={setNumberCrm}
            title="Número CRM*"
            placeholder="Digite seu CRM"
          />

          <InputSelected
            onPress={() => openModal()}
            title="Estado CRM*"
            textSelect={itemSelect ? itemSelect?.estadocrm : 'Estado CRM'}
          />

          <ContainerTitle>
            <TitleInputs>Regiões de preferencia de plantão</TitleInputs>
          </ContainerTitle>

          <InputSelected
            onPress={() => alert("ok")}
            title="Localidade*"
            textSelect="Localidade"
          />

          <InputSelected
            onPress={() => alert("ok")}
            title="Especialidade*"
            textSelect="Selecione a especialidade"
          />

          <Button title="Avançar" onPress={() => handleNext()} />

          <Modal
            transparent={true}
            visible={popUpVisible}
            animationType="slide"
          >
            <PickerCrm
              onClosed={() => setPopUpVisible(false)}
              options={estadosSiglas}
              selectedItem={handleChangeSelect}
            />
          </Modal>
        </ContainerFormInput>
      </ScrollView>
    </Container>
  );
}
