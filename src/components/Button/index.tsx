import React from "react";

import { BoxButtonDisabled, BoxButton, TextButton } from "./styles";

import { TouchableOpacityProps } from 'react-native'

interface PropsButton extends TouchableOpacityProps {
  title?: string;
  type?: "disabled";
  colorBackground?: "white";
}

export function Button({ title, type,colorBackground, ...rest }: PropsButton) {
  return (
    <>
  {type === "disabled" ? (
    <BoxButtonDisabled disabled={true}>
      <TextButton>{title}</TextButton>
    </BoxButtonDisabled>
  ) : (
    <BoxButton style={colorBackground === 'white' ? { backgroundColor: '#fff' } : {}} {...rest}>
      <TextButton style={colorBackground === 'white' ? { color: '#02946F' } : {}}>{title}</TextButton>
    </BoxButton>
  )}
</>

  );
}