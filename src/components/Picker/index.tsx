import React from "react";

import {
  ContainerModal,
  ClosedModal,
  ButtonOpiton,
  TextSiglas,
} from "./styles";

import { ScrollView } from "react-native";
import { SelectedProps } from "../../screens/Cadaster/FormPreCadaster";

interface ModalInfoProps {
  options?: SelectedProps[];
  onClosed?: () => void;
  selectedItem: (item: SelectedProps) => void;
}

export function PickerCrm({ onClosed, options, selectedItem }: ModalInfoProps) {
  async function handleSelected(item: SelectedProps) {
    selectedItem(item);
  }

  const option = options?.map((item, index) => (
    <ButtonOpiton key={index} onPress={() => handleSelected(item)}>
      <TextSiglas>{item.estadocrm}</TextSiglas>
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
