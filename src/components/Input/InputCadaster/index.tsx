import React from "react";

import { InputContainer, TitleInput, TextInput } from "./styles";

interface Props {
  title?: string;
  placeholder?: string
}

export function InputCadaster({title, placeholder}: Props) {
  return (
    <>
      {<TitleInput>{title}</TitleInput>}
      <InputContainer>
        <TextInput placeholder={placeholder} placeholderTextColor="#C1BCCC" />
      </InputContainer>
    </>
  );
}
