import React, {useContext} from "react";

import {
  Container,
  ContainerHeader,
  Title,
  SubTitle,
  PhotoUser,
  Banner,
  ContainerBanner,
  ContainerListAttch,
  Box,
  BoxIcon,
  Icon,
  TitleAnexo,
  SubTitleAnexo,
  ContainerButton,
} from "./styles";

import { useNavigation,RouteProp, useRoute } from "@react-navigation/native";

import banner from "../../../assets/banner.png";
import attachments1 from "../../../assets/attachments1.png";
import { Button } from "../../../components/Button";
import { AuthContext } from "../../../context/AuthContext";

const anexosType = [
  {
    type: "anexoDiplomaDeclaracao",
    name: "Diploma Declaracao",
  },
  {
    type: "anexoProtocolo",
    name: "protocolo",
  },
  {
    type: "anexoCpf",
    name: "Cpf",
  },
  {
    type: "anexoComprovanteEndereco",
    name: "Comprovante Endereco",
  },
  {
    type: "anexoCertidaoCasamento",
    name: "Certidao Casamento",
  },
  {
    type: "anexoCnpjEmpresa",
    name: "Cnpj Empresa",
  },
  {
    type: "anexoDocumentosAdicicionais",
    name: "Documentos Adicicionais",
  },
  {
    type: "anexoProtocoloAdicional",
    name: "Protocolo Adicional",
  },
  {
    type: "anexoRpaAlvara",
    name: "Rpa Alvara",
  },
  {
    type: "anexoCrmDefinitivo",
    name: "CrmD efinitivo",
  },
  {
    type: "anexoRg",
    name: "Rg",
  },
  {
    type: "anexoCnh",
    name: "Cnh",
  },
  {
    type: "anexoCertidaoRqe",
    name: "Certidao Rqe",
  },
  {
    type: "anexoContratoSocialConsolidado",
    name: "Contrato Social Consolidado",
  },
  {
    type: "anexoFotoMedico",
    name: "Foto Medico",
  },
  {
    type: "anexoCertidaoSimplificadaJuntaComercial",
    name: "Certidao Simplificada Junta Comercial",
  },
  {
    type: "anexoCrmAdicional",
    name: "Crm Adicional",
  },
];

type RouteDetailParams = {
  AttachmentsCadaster: {
    nome: string;
    telefone: string;
    email: string;
    dataNascimento: string;
    cpf: string;
    estado: string;
    sexo: string;
    endereco: string;
    estadoCivil: string;
    numero: string;
    cep: string;
    complemento: string;
    especialidade: string;
    cidade: string;
    numeroCrm: string;
    estadoCrm: string;
    emissorCrm: string;
  };
};

export type DoctorRouteProp = RouteProp<RouteDetailParams, "AttachmentsCadaster">;

export function AttachmentsCadaster() {

  const {updateForm, etapaCadastro} = useContext(AuthContext)
  

  const navigation = useNavigation();

  const route = useRoute<DoctorRouteProp>();
  const preCadastro = route.params;

  return (
    <Container>
      <ContainerHeader>
        <Title>
          Vamos iniciar{"\n"}
          <SubTitle>os Anexos</SubTitle>
        </Title>
        <PhotoUser></PhotoUser>
      </ContainerHeader>

      <ContainerBanner>
        <Banner source={banner} />
      </ContainerBanner>

      <ContainerListAttch>
        {anexosType.map((anexo) => {
          return (
            <Box
              onPress={() =>
                navigation.navigate({
                  name: "AttachmentsDoctor",
                  params: { typeAnexo: anexo.type },
                  merge: true,
                })
              }
              key={anexo}
            >
              <BoxIcon>
                <Icon source={attachments1} />
              </BoxIcon>

              <TitleAnexo>{anexo.name}</TitleAnexo>
              <SubTitleAnexo>Lorem ipsum</SubTitleAnexo>
            </Box>
          );
        })}

      </ContainerListAttch>
        <ContainerButton>
          <Button title="Finalizar" onPress={() => updateForm()} />
        </ContainerButton>
    </Container>
  );
}
