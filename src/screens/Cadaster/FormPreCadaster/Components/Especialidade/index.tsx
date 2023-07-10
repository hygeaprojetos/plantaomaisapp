import React from "react";

import {
  ContainerModal,
  ClosedModal,
  ButtonOpiton,
  TextSiglas,
} from "./styles";

import { ScrollView } from "react-native";
import { SelectedEspecProps } from "../../";

interface ModalInfoProps {
  options?: SelectedEspecProps[];
  onClosed?: () => void;
  selectedItem: (item: SelectedEspecProps) => void;
}

export function PickerEspecialidades({
  onClosed,
  options,
  selectedItem,
}: ModalInfoProps) {

  async function handleSelected(item: SelectedEspecProps) {
    selectedItem(item);
  }

  const option = options?.map((item, index) => (
    <ButtonOpiton key={index} onPress={() => handleSelected(item)}>
      <TextSiglas>{item}</TextSiglas>
    </ButtonOpiton>
  ));

  return (
    <ClosedModal onPress={onClosed} activeOpacity={0.9}>
      <ContainerModal>
        <ScrollView showsVerticalScrollIndicator={false}>{option}</ScrollView>
      </ContainerModal>
    </ClosedModal>
  );
}