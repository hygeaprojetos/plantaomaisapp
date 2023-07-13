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
import { PickerEstadoCivil } from "../../../components/Picker/EstadoCivil";
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
export type SelectEstadoCivilProps = {
  solteiro: string;
  casado: string;
  separado: string;
  divorciado: string;
  viúvo: string;
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
interface EspecialidadeProps {
  id: string;
  nome: string;
}

export type DoctorRouteProp = RouteProp<RouteDetailParams, "FormCadaster">;

export function FormCadaster() {
  const { navegarForm, etapaCadastro } = useContext(AuthContext);

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
  const [funcionarioPublico, setFuncionarioPublico] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [numberCrm, setNumberCrm] = useState(preCadastro.crms?.[0].numero);
  const [emissaoCrm, setEmissaoCrm] = useState(preCadastro.crms?.[0].emissao);
  const [cnes, setCnes] = useState("");
  const [location, setLocation] = useState("");

  const [localidadeVisible, setLocalidadeVisible] = useState(false);
  const [localidadeSelect, setlocalidadeSelect] = useState<
    SelectedProps | undefined
  >();

  const [estadoVisible, setEstadoVisible] = useState(false);
  const [estadoSelect, setEstadoSelect] = useState<SelectedProps | undefined>();

  const [especialidadesVisible, setEspecialidadesVisible] = useState(false);
  const [especialidadeSelect, setEspecialidadeSelect] = useState<
    SelectedEspecProps | undefined
  >();
  const [especialidades, setEspecialidades] = useState<EspecialidadeProps[]>([]);

  const [sexoVisible, setSexoVisible] = useState(false);
  const [sexoSelect, setSexoSelect] = useState<SelectSexoProps | undefined>();

  const [civilVisible, setcivilVisible] = useState(false);
  const [civilSelect, setcivilSelect] = useState<
    SelectEstadoCivilProps | undefined
  >();

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
        const especialidadesData = data.response[0] as EspecialidadeProps[];

        setEspecialidades(data);
        setEspecialidades(especialidadesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const estadoCrmLocal: SelectedProps[] = estados.map((estado) => ({
    estadocrm: estado.sigla,
  }));
  const estado: SelectedProps[] = estados.map((estado) => ({
    estadocrm: estado.sigla,
  }));

  const sexoList = {
    masculino: "Masculino",
    feminino: "Feminino",
  };

  const listarSexo = () => {
    return Object.values(sexoList);
  };

  console.log("{etapa}", etapaCadastro)

  const listaSexo = listarSexo();

  const estadoCivilList = {
    solteiro: "Solteiro",
    casado: "Casado",
    separado: "Separado",
    divorciado: "Divorciado",
    viúvo: "Viúvo",
  };

  const listarEstadoCivil = () => {
    return Object.values(estadoCivilList);
  };

  const listaEstadoCivil = listarEstadoCivil();

  const dadosAtualizados = {
    nome: preCadastro.nome,
    telefone: preCadastro.telefone,
    email: preCadastro.email,
    dataNascimento: date,
    cpf: preCadastro.cpf,
    estado: estadoSelect,
    sexo: sexoSelect,
    endereco: endereco,
    estadoCivil: civilSelect,
    numero: number,
    cep: cep,
    complemento: "Novo Complemento",
    especialidade: especialidadeSelect,
    cidade: city,
    numeroCrm: preCadastro.crms?.[0].numero,
    estadoCrm: localidadeSelect,
    emissorCrm: preCadastro.crms?.[0].emissao,
  };

  const nomesEspecialidades: any = Array.isArray(especialidades)
    ? especialidades.map((especialidade) => especialidade.nome)
    : [];

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
  function openLocalidade() {
    setLocalidadeVisible(true);
  }
  function handleEstado(item: SelectedProps) {
    setEstadoSelect(item);
    setEstadoVisible(false);
  }
  function openModalEstado() {
    setEstadoVisible(true);
  }

  function handleSexo(item: SelectSexoProps) {
    setSexoSelect(item);
    setSexoVisible(false);
  }
  function openModalSexo() {
    setSexoVisible(true);
  }
  function handleEstadoCivil(item: SelectEstadoCivilProps) {
    setcivilSelect(item);
    setcivilVisible(false);
  }
  function openModalEstadoCivil() {
    setcivilVisible(true);
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
            textSelect={
              civilSelect ? civilSelect : "Selecione seu estado Civil"
            }
            onPress={() => openModalEstadoCivil()}
          />
          <InputSelected
            onPress={() => openModalSexo()}
            title="Sexo*"
            textSelect={sexoSelect ? sexoSelect : "Selecione o sexo"}
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

          <InputSelected
            title="Estado*"
            onPress={() => openModalEstado()}
            textSelect={estadoSelect ? estadoSelect.estadocrm : "Estado"}
          />

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
          {/* <InputSelected title="Curso*" textSelect="Selecione o curso" /> */}
          <InputCadaster
            title="É funcionário público concursado?*"
            placeholder="É funcionário público concursado?"
            value={funcionarioPublico}
            onChangeText={setFuncionarioPublico}
          />
          <InputCadaster
            value={location}
            onChangeText={setLocation}
            title="Qual local atua?*"
            placeholder="Nome do local"
          />

          <Button
            title="Avançar"
            //onPress={() => alterarFormDoutor(dadosAtualizados)}
            onPress={() => navigation.navigate("CheckListMessage")}
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
              options={estadoCrmLocal}
              selectedItem={handleLocalidades}
            />
          </Modal>
          <Modal
            transparent={true}
            visible={estadoVisible}
            animationType="slide"
          >
            <PickerLocalidades
              onClosed={() => setEstadoVisible(false)}
              options={estado}
              selectedItem={handleEstado}
            />
          </Modal>
          <Modal transparent={true} visible={sexoVisible} animationType="slide">
            <PickerSexo
              onClosed={() => setSexoVisible(false)}
              options={listaSexo}
              selectedItem={handleSexo}
            />
          </Modal>
          <Modal
            transparent={true}
            visible={civilVisible}
            animationType="slide"
          >
            <PickerEstadoCivil
              onClosed={() => setcivilVisible(false)}
              options={listaEstadoCivil}
              selectedItem={handleEstadoCivil}
            />
          </Modal>
        </ContainerFormInput>
      </ScrollView>
    </Container>
  );
}
