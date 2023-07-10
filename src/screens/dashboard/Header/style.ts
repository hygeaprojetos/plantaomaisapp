import styled from "styled-components/native";

export interface PropsHeader {
    mode: 'reduzido' | 'aberto';
}
  

export const Container = styled.View`
    background-color: #0E9874;
    width: 100%;
    height: ${(p: PropsHeader) => p.mode === 'aberto' ? 200 : 150 };
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    flex-direction: column;
    align-items: center;
`