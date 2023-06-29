import React from "react";

import {
  Container,
  Title,
  ContainerBox,
  FlexItems,
  Box,
  Icon,
  BoxIcon,
  AnexoIcon,
  Name,
} from "./styles";

import icon from "../../../assets/attachments.png";
import anex from "../../../assets/anex.png";
import { Button } from "../../../components/Button";

export function AttachmentsDoctor() {
  return (
    <Container>
      <Title>Diploma médico</Title>

      <ContainerBox>
        <Box>
          <FlexItems>
            <BoxIcon>
              <Icon source={icon} />
            </BoxIcon>
            <Name>Anexo frente</Name>
            <AnexoIcon>
            <Icon source={anex} />
            </AnexoIcon>
          </FlexItems>
        </Box>
        <Box>
          <FlexItems>
            <BoxIcon>
              <Icon source={icon} />
            </BoxIcon>
            <Name>Anexo verso</Name>
            <AnexoIcon>
            <Icon source={anex} />
            </AnexoIcon>
          </FlexItems>
        </Box>
      </ContainerBox>

      <Button title="Anexar"/>
    </Container>
  );
}
