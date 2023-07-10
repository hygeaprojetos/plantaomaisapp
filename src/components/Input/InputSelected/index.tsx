import React from "react";

import { InputContainer, TitleInput, TextSelect, ButtonPopUp} from "./styles";

import { AntDesign } from '@expo/vector-icons';

interface Props {
  title?: string;
  textSelect?: any;
  onPress?: () => void;
}

export function InputSelected({title, textSelect, onPress}: Props) {
  return (
    <>
      {<TitleInput>{title}</TitleInput>}
      <InputContainer>
        <TextSelect>{textSelect}</TextSelect>
        <ButtonPopUp onPress={onPress}>
        <AntDesign name="down" size={18} color="#068C6F" />
        </ButtonPopUp>
      </InputContainer>
    </>
  );
}
