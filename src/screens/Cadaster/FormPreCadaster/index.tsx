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

export type SelectedProps = {
  estadocrm: string;
};
export type SelectedEspecProps = {
  nome: [] | string;
};

interface props {
  nome: SelectedEspecProps
}

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

        setEspecialidades(data)
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

  const nomesEspecialidades: any = Array.isArray(especialidades)
  ? especialidades.map(especialidade => especialidade.nome)
  : [];

  //console.log("{especialidades}", nomesEspecialidades)

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

  async function handleNext() {
    const estadocrm = itemSelect.estadocrm;
    const _OBJECT: any = {
      nome: name,
      email: email,
      senha: senha.replace(" ", ""),
      telefone: phone,
      cpf: numberIndentify,
      especialidade: especialidadeSelect,
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
          />
          <InputCadaster
            value={confirmSenha}
            onChangeText={setConfirmSenha}
            title="Confirmar senha*"
            placeholder="************"
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
            textSelect={itemSelect ? itemSelect?.estadocrm : "Estado CRM"}
          />

          <ContainerTitle>
            <TitleInputs>Regiões de preferencia de plantão</TitleInputs>
          </ContainerTitle>

          <InputSelected
            onPress={() => alert('localidade')}
            title="Localidade*"
            textSelect="Localidade"
          />


          <InputSelected
            onPress={() => openModalEspecialidades()}
            title="Especialidade*"
            textSelect={especialidadeSelect ? especialidadeSelect : "Selecione a especialidade"}
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
