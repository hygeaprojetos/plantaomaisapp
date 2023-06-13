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
} from "./styles";

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
          <TitleBox>Quero ser RPA</TitleBox>
          <Description>
            Lorem ipsum dolor sit amet, consectetur{"\n"}
            adipscing elit. Ut vel odio en urna ultrice...
          </Description>
        </Box>
        <Box>
          <TitleBox>Quero ser PJ</TitleBox>
          <Description>
            Lorem ipsum dolor sit amet, consectetur{"\n"}
            adipscing elit. Ut vel odio en urna ultrice...
          </Description>
        </Box>
        <Box>
          <TitleBox>Quero ser societário</TitleBox>
          <Description>
            Lorem ipsum dolor sit amet, consectetur{"\n"}
            adipscing elit. Ut vel odio en urna ultrice...
          </Description>
        </Box>
      </ContainerBox>
      
    </Container>
  );
}
