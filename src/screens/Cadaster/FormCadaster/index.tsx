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
} from "./styles";

import { ScrollView, Modal } from "react-native";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import banner from "../../../assets/banner.png";
import { InputCadaster } from "../../../components/Input/InputCadaster";
import { Button } from "../../../components/Button";
import { AuthContext } from "../../../context/AuthContext";
import { InputSelected } from "../../../components/Input/InputSelected";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../../routes/auth.routes";
import { PickerEspecialidades } from "../FormPreCadaster/Components/Especialidade";
import { PickerLocalidades } from "../FormPreCadaster/Components/Localidade";
import { PickerSexo } from "../../../components/Picker/Sexo";
import { estados } from "../../../utils/estados";

type RouteDetailParams = {
  FormCadaster: {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    crms: [
      {
        emissao: string;
        estado: string;
        numero: string;
      }
    ];
  };
};

export type SelectedProps = {
  estadocrm: string;
};
export type SelectSexoProps = {
  masculino: string;
  feminino: string;
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

export type DoctorRouteProp = RouteProp<RouteDetailParams, "FormCadaster">;

export function FormCadaster() {
  const { signUp } = useContext(AuthContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const route = useRoute<DoctorRouteProp>();
  const preCadastro = route.params;

  const [name, setName] = useState(preCadastro.nome);
  const [email, setEmail] = useState(preCadastro.email);
  const [phone, setPhone] = useState(preCadastro.telefone);
  const [rg, setRg] = useState("");
  const [numberIndentify, setNumberIndentify] = useState(preCadastro.cpf);
  const [date, setDate] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [numberCrm, setNumberCrm] = useState(preCadastro.crms?.[0].numero);
  const [emissaoCrm, setEmissaoCrm] = useState(preCadastro.crms?.[0].emissao);
  const [cnes, setCnes] = useState("");
  const [curso, setCurso] = useState("");
  const [location, setLocation] = useState("");

  const [localidadeVisible, setLocalidadeVisible] = useState(false);
  const [localidadeSelect, setlocalidadeSelect] = useState<
    SelectedProps | undefined
  >();

  const [especialidadesVisible, setEspecialidadesVisible] = useState(false);
  const [especialidadeSelect, setEspecialidadeSelect] = useState<
    SelectedEspecProps | undefined
  >();
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  const [sexoVisible, setSexoVisible] = useState(false);
  const [sexoSelect, setSexoSelect] = useState<SelectSexoProps | undefined>();

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

  async function alterarFormDoutor(dados) {
    console.log("{DADOS}", dados);
    const host = "http://10.0.12.10:3001";
    try {
      const tokenUser = await AsyncStorage.getItem("tokenPL");

      const response = await fetch(`${host}/doctor/edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenUser,
        },
        body: JSON.stringify(dados),
      });

      //console.log(response)
      if (!response) {
        throw new Error("Ocorreu um erro ao atualizar os dados");
      }

      const responseData = await response.json();
      console.log("Dados atualizados com sucesso:", responseData);
    } catch (error) {
      console.error(
        "Ocorreu um erro ao atualizar os dados:",
        JSON.stringify(error)
      );
    }
  }

  const localidade: SelectedProps[] = estados.map((estado) => ({
    estadocrm: estado.sigla,
  }));

  const sexoList = {
    masculino: "Masculino",
    feminino: "Feminino",
  };

  const listarSexo = () => {
    return Object.values(sexoList).map((sexo) => sexo);
  };

  const listaSexo = listarSexo();

  const dadosAtualizados = {
    nome: preCadastro.nome,
    telefone: preCadastro.telefone,
    email: preCadastro.email,
    dataNascimento: date,
    cpf: preCadastro.cpf,
    sexo: sexoSelect,
    endereco: endereco,
    numero: number,
    cep: cep,
    complemento: "Novo Complemento",
    estado: state,
    especialidade: especialidadeSelect,
    cidade: city,
    numeroCrm: preCadastro.crms?.[0].numero,
    estadoCrm: localidadeSelect,
    emissorCrm: preCadastro.crms?.[0].emissao,
  };

  function handleEspecialidades(item: SelectedEspecProps) {
    setEspecialidadeSelect(item);
    setEspecialidadesVisible(false);
  }
  function openModalEspecialidades() {
    setEspecialidadesVisible(true);
  }

  const nomesEspecialidades: any = Array.isArray(especialidades)
    ? especialidades.map((especialidade) => especialidade.nome)
    : [];

  function handleLocalidades(item: SelectedProps) {
    setlocalidadeSelect(item);
    setLocalidadeVisible(false);
  }
  function openLocalidade() {
    setLocalidadeVisible(true);
  }

  function handleSexo(item: SelectSexoProps) {
    setSexoSelect(item);
    setSexoVisible(false);
  }
  function openModalSexo() {
    setSexoVisible(true);
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
            placeholder="Digite seu melhor e-mail"
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
          <InputSelected
            onPress={() => openModalSexo()}
            title="Sexo*"
            textSelect={
              sexoSelect
                ? sexoSelect
                : 'Selecione o sexo'
            }
          />

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
          <InputSelected title="Estado*" textSelect="Estado" />
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
          <InputSelected
            title="Estado CRM*"
            textSelect={
              localidadeSelect
                ? localidadeSelect?.estadocrm
                : preCadastro.crms?.[0].estado
            }
            onPress={() => openLocalidade()}
          />
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
            onPress={() => openModalEspecialidades()}
            textSelect={
              especialidadeSelect
                ? especialidadeSelect
                : "Selecione a especialidade"
            }
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

          <Button
            title="Avançar"
            onPress={() => alterarFormDoutor(dadosAtualizados)}
          />

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
          <Modal transparent={true} visible={sexoVisible} animationType="slide">
            <PickerSexo
              onClosed={() => setSexoVisible(false)}
              options={listaSexo}
              selectedItem={handleSexo}
            />
          </Modal>
        </ContainerFormInput>
      </ScrollView>
    </Container>
  );
}
