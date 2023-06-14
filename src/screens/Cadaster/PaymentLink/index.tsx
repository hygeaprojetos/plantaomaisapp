import React from "react";

import {
  Container,
  ContainerHeader,
  Title,
  SubTitle,
  Description,
  ContainerBox,
  TitleBox,
  Box,
  BoxRow,
  BoxAlignRow,
  Tetse
} from "./styles";

import { Octicons, Entypo } from "@expo/vector-icons";

export function PaymentLink() {
  return (
    <Container>
      <ContainerHeader>
        <Title>Escolha o vínculo</Title>
        <SubTitle>
          Entenda cada tipo de vínculo{"\n"}e entenda a particularidade{"\n"}
          de cada um deles.
        </SubTitle>
      </ContainerHeader>

      <ContainerBox>
        <Box>
          <BoxRow>
            <BoxAlignRow>
              <Octicons name="calendar" size={24} color="white" />
              <TitleBox>Quero ser RPA</TitleBox>
            </BoxAlignRow>
            <Tetse>
            <Description>
              Lorem ipsum dolor sit amet, consectetur{"\n"}
              adipscing elit. Ut vel odio en urna ultrice...
            </Description>
            <Entypo name="chevron-right" size={24} color="white" /> 
            </Tetse>
          </BoxRow>
        </Box>
        <Box>
          <BoxRow>
            <BoxAlignRow>
              <Octicons name="calendar" size={24} color="white" />
              <TitleBox>Quero ser PJ</TitleBox>
            </BoxAlignRow>
            <Tetse>
            <Description>
              Lorem ipsum dolor sit amet, consectetur{"\n"}
              adipscing elit. Ut vel odio en urna ultrice...
            </Description>
            <Entypo name="chevron-right" size={24} color="white" /> 
            </Tetse>
          </BoxRow>
        </Box>
        <Box>
          <BoxRow>
            <BoxAlignRow>
              <Octicons name="calendar" size={24} color="white" />
              <TitleBox>Quero ser societário</TitleBox>
            </BoxAlignRow>
            <Tetse>
            <Description>
              Lorem ipsum dolor sit amet, consectetur{"\n"}
              adipscing elit. Ut vel odio en urna ultrice...
            </Description>
            <Entypo name="chevron-right" size={24} color="white" /> 
            </Tetse>
          </BoxRow>
        </Box>
      </ContainerBox>
    </Container>
  );
}
