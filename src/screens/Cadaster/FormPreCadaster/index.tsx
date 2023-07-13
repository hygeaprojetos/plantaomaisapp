import React, { useState, useContext, useEffect } from "react";

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
import { AuthContext } from "../../../context/AuthContext";
import { PickerEspecialidades } from "./Components/Especialidade";
import { PickerLocalidades } from "./Components/Localidade";

export type SelectedProps = {
  estadocrm: string;
};
export type SelectedEstadosProps = {
  estadoLocalidade: string;
};
export type SelectedEspecProps = {
  nome: [] | string;
};
interface Especialidade {
  id: string;
  nome: string;
}

export function FormPreCadaster() {
  const { signUp } = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [phone, setPhone] = useState("");
  const [numberIndentify, setNumberIndentify] = useState("");
  const [numberCrm, setNumberCrm] = useState("");

  const [popUpVisible, setPopUpVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState<SelectedProps | undefined>();

  const [especialidadesVisible, setEspecialidadesVisible] = useState(false);
  const [especialidadeSelect, setEspecialidadeSelect] = useState<SelectedEspecProps | undefined>();
  
  const [localidadeVisible, setLocalidadeVisible] = useState(false)
  const [localidadeSelect, setlocalidadeSelect] = useState<SelectedProps | undefined>();

  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const host = "http://10.0.12.10:3001";
      try {
        const response = await fetch(`${host}/especialidade/list`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentPage: 0,
          }),
        });
        const data = await response.json();
        const especialidadesData = data.response[0] as Especialidade[];

        setEspecialidades(data);
        setEspecialidades(especialidadesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const estadosSiglas: SelectedProps[] = estados.map((estado) => ({
    estadocrm: estado.sigla,
  }));

  const localidade: SelectedProps[] = estados.map((estado) => ({
    estadocrm: estado.sigla,
  }));

  const nomesEspecialidades: any = Array.isArray(especialidades)
    ? especialidades.map((especialidade) => especialidade.nome)
    : [];

  function handleChangeSelect(item: SelectedProps) {
    setItemSelect(item);
    setPopUpVisible(false);
  }
  function openModal() {
    setPopUpVisible(true);
  }
  function handleEspecialidades(item: SelectedEspecProps) {
    setEspecialidadeSelect(item);
    setEspecialidadesVisible(false);
  }
  function openModalEspecialidades() {
    setEspecialidadesVisible(true);
  }
  function handleLocalidades(item: SelectedProps) {
    setlocalidadeSelect(item);
    setLocalidadeVisible(false);
  }
  function openLocalidade(){
    setLocalidadeVisible(true)
  }

  async function handleNext() {
    const estadocrm = itemSelect.estadocrm;
    const _OBJECT: any = {
      nome: name,
      email: email,
      senha: senha,
      telefone: phone,
      cpf: numberIndentify,
      especialidade: especialidadeSelect,
      localidade: localidadeSelect,
      crms: [
        {
          numero: numberCrm,
          estado: estadocrm,
          emissao: "00/00/0000",
        },
      ],
    };
    if (senha.replace(" ", "") != confirmSenha.replace(" ", "")) {
      alert("As senhas não são iguais");
    } else {
      await signUp(_OBJECT);
      navigation.navigate("VerificationCode", _OBJECT);
    }
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
            value={senha}
            onChangeText={setSenha}
            title="Senha*"
            placeholder="************"
            secureTextEntry={true}
          />
          <InputCadaster
            value={confirmSenha}
            onChangeText={setConfirmSenha}
            title="Confirmar senha*"
            placeholder="************"
            secureTextEntry={true}
          />
          <InputCadaster
            value={phone}
            onChangeText={setPhone}
            title="Telefone*"
            placeholder="(00) 0 0000-0000"
            maxLength={10}
          />
          <InputCadaster
            value={numberIndentify}
            onChangeText={setNumberIndentify}
            title="Número de identificação*"
            placeholder="Digite seu CPF"
            maxLength={11}
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
            textSelect={itemSelect ? itemSelect?.estadocrm : "Estado CRM"}
          />

          <ContainerTitle>
            <TitleInputs>Regiões de preferencia de plantão</TitleInputs>
          </ContainerTitle>

          <InputSelected
            onPress={() => openLocalidade()}
            title="Localidade*"
            textSelect={localidadeSelect ? localidadeSelect?.estadocrm : "localidade"}
          />

          <InputSelected
            onPress={() => openModalEspecialidades()}
            title="Especialidade*"
            textSelect={
              especialidadeSelect
                ? especialidadeSelect
                : "Selecione a especialidade"
            }
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
          <Modal
            transparent={true}
            visible={localidadeVisible}
            animationType="slide"
          >
            <PickerLocalidades
              onClosed={() => setLocalidadeVisible(false)}
              options={localidade}
              selectedItem={handleLocalidades}
            />
          </Modal>
          <Modal
            transparent={true}
            visible={especialidadesVisible}
            animationType="slide"
          >
            <PickerEspecialidades
              onClosed={() => setEspecialidadesVisible(false)}
              options={nomesEspecialidades}
              selectedItem={handleEspecialidades}
            />
          </Modal>
        </ContainerFormInput>
      </ScrollView>
    </Container>
  );
}
