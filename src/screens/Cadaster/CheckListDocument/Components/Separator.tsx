import React from "react";
import styled from "styled-components/native";
export const Separator = styled.View`
    background-color: #eaeaea;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 1.5px;
    margin-top: 15px;
`;

export function SeparatorItem() {
  return (
    <>
      <Separator></Separator>
    </>
  );
}
