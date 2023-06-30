import React from "react";

import { InputContainer, TitleInput, TextInput } from "./styles";

interface Props {
  title?: string;
  placeholder?: string
  value?: string;
  onChangeText?: (value: string) => void
}

export function InputCadaster({title, placeholder, onChangeText, value}: Props) {
  return (
    <>
      {<TitleInput>{title}</TitleInput>}
      <InputContainer>
        <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder} placeholderTextColor="#C1BCCC" />
      </InputContainer>
    </>
  );
}
