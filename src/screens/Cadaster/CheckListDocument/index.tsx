import React, { useState } from "react";

import {
  Container,
  ContainerAlignHeader,
  ContainerHeader,
  Title,
  SubTitle,
  ContainerDescription,
  Description,
  PhotoUser,
  ContainerListener,
} from "./styles";

import { useNavigation,RouteProp, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";

import { ListDocuments } from "../../../components/ComponentList/List-Document";
import { SeparatorItem } from "./Components/Separator";
import { Button } from "../../../components/Button";

type RouteDetailParams = {
  CheckListDocument: {
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

export type DoctorRouteProp = RouteProp<RouteDetailParams, "CheckListDocument">;

export function CheckListDocument() {
  const navigation = useNavigation();

  const route = useRoute<DoctorRouteProp>();
  const preCadastro = route.params;

  console.log("{CHEGOU AQUI}", preCadastro)

  return (
    <Container>
      <ContainerAlignHeader>
        <ContainerHeader>
          <Title>
            Nosso checklist{"\n"}
            <SubTitle>documentos</SubTitle>
          </Title>
          <PhotoUser></PhotoUser>
        </ContainerHeader>
        <ContainerDescription>
          <Description>
            Tenha todos os documentos{"\n"}
            em mãos para agilizar{"\n"}
            seu cadastro.
          </Description>
        </ContainerDescription>
      </ContainerAlignHeader>

      <ContainerListener>
        {/* <FlatList
          data={Array(5).fill(0)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={SeparatorItem}
          renderItem={({ item }) => <ListDocuments />}
        /> */}
        {/* <Button title="Finalizar Cadastro"/> */}
        <ListDocuments title="Anexo diploma do médico"/>
        <ListDocuments title="Anexo CRM definitivo"/>
        <ListDocuments title="Anexo protocolo"/>
        <ListDocuments title="Anexo RG"/>
        <ListDocuments title="Anexo CPF"/>
        <ListDocuments title="Anexo CNH"/>
        <ListDocuments title="Anexo comp. de endereço"/>
        <ListDocuments title="Anexo Certidão RQE"/>
        <ListDocuments title="Anexo Certidão de casamento"/>
        <ListDocuments title="Anexo Contrato Social consolidado"/>
        <ListDocuments title="Anexo Cartão CNPJ"/>
        <ListDocuments title="Anexo Certidão simplificada da junta"/>
        <ListDocuments title="Anexo CRM Adicional"/>
        <ListDocuments title="Anexo RPA-Alvará"/>
        <ListDocuments title="Anexo Documento adicional"/>

        <Button onPress={() => navigation.navigate("AttachmentsCadaster", preCadastro)} title="Finalizar cadastro"/>
      </ContainerListener>

    </Container>
  );
}
