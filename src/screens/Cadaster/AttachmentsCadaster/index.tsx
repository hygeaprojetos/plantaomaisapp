import React from "react";

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
  SubTitleAnexo
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import banner from "../../../assets/banner.png";
import attachments1 from '../../../assets/attachments1.png'

export function AttachmentsCadaster() {

  const navigation = useNavigation()

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
          <Box>
              <BoxIcon>
                <Icon source={attachments1}/>
              </BoxIcon>

              <TitleAnexo>Diploma do médico</TitleAnexo>
              <SubTitleAnexo>Lorem ipsum</SubTitleAnexo>
          </Box>
          <Box onPress={() => navigation.navigate("AttachmentsDoctor")}>
              <BoxIcon>
                <Icon source={attachments1}/>
              </BoxIcon>

              <TitleAnexo>CRM definitivo</TitleAnexo>
              <SubTitleAnexo>Lorem ipsum</SubTitleAnexo>
          </Box>
      </ContainerListAttch>
    </Container>
  );
}
