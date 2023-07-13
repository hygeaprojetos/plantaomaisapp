import React from "react";

import { InputContainer, TitleInput, TextInput } from "./styles";

interface Props {
  title?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  secureTextEntry?: any;
  maxLength?: any;
}

export function InputCadaster({
  title,
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  maxLength
}: Props) {
  return (
    <>
      {<TitleInput>{title}</TitleInput>}
      <InputContainer>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#C1BCCC"
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
        />
      </InputContainer>
    </>
  );
}
