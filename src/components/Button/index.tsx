import React from "react";

import { BoxButtonDisabled, BoxButton, TextButton } from "./styles";

interface PropsButton {
  title?: string;
  type?: "disabled";
}

export function Button({ title, type }: PropsButton) {
  return (
    <>
      {type == "disabled" ? (
        <BoxButtonDisabled disabled={true}>
          <TextButton>{title}</TextButton>
        </BoxButtonDisabled>
      ) : (
        <BoxButton>
          <TextButton>{title}</TextButton>
        </BoxButton>
      )}
    </>
  );
}
