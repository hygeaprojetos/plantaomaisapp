import React, { useState } from "react";

import { Container, Title, Description, TextAlert } from "./styles";

import { Button } from "../../../components/Button";
import { ContainerButton } from "../CaptureName/styles";
import { Modal } from "react-native";
import { ModalPopUp } from "./components/Modal";

export function InternalLink() {

  const [popUpVisible, setPopUpVisible] = useState(false);

  return (
    <Container>
      <Title>Sobre o RPA</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur{"\n"}
        adipiscing elit, sed do eiusmod tempor incididunt{"\n"}
        ut labore et dolore magna aliqua. Ut enim ad{"\n"}
        minim veniam, quis nostrud exercitation ullamco{"\n"}
        laboris nisi ut aliquip ex ea commodo consequat.{"\n"}
        Duis aute irure dolor in reprehenderit in voluptate{"\n"}
        velit esse cillum dolore eu fugiat nulla pariatur.{"\n"}
        Excepteur sint occaecat cupidatat non proident,{"\n"}
        sunt in culpa qui officia deserunt mollit anim id est{"\n"}
        laborum.
      </Description>

      <TextAlert>
        Para finalizar, vamos enviar um código{"\n "}
        de verificação em seu e-mail.
      </TextAlert>

      <ContainerButton>
        <Button
        onPress={() => setPopUpVisible(true)}
        title="Quero ser RPA" />
      </ContainerButton>

      <Modal transparent={true} visible={popUpVisible} animationType="slide">
        <ModalPopUp
          title="Tudo certo"
          description="Vamos fazer o registro facil
          e precisamos da liberação da sua câmera."
          textButton="Liberar Acesso"
          onClosed={() => alert("ok")}
        />
      </Modal>
    </Container>
  );
}