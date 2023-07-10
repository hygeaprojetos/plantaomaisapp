import styled from "styled-components/native";
import { PropsHeader } from "../style";

export const Container = styled.View`
    width: 100%;
    height: ${(p: PropsHeader) => p.mode === 'aberto' ? 100 : 150 };
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10px;
    margin-bottom: 20px;
`

export const ProfileContainer = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: flex-end;
    ${(p: PropsHeader) => {if(p.mode === 'reduzido') return 'width: 100%;'} }
    ${(p: PropsHeader) => {if(p.mode === 'reduzido') return 'justify-content: space-between;'} }
    ${(p: PropsHeader) => {if(p.mode === 'reduzido') return 'margin-bottom: 20px;'} }
`

export const Photo = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-width: 1px;
    border-color: #ffffff;
`

export const TextContainer = styled.View`
    margin-left: 10px;
    margin-bottom: 5px;
`

export const Wellcome = styled.Text`
    color: #ffffff;
    font-size: 18px;
`

export const Name = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
`

export const IconContainer = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.19);
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
`

export const BellPin = styled.View`
    background-color: red;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    position: absolute;
    top: 9px;
    right: 10px;
    z-index: 9;
`

export const Email = styled.Text`
    color: #ffffff;
    font-size: 16px;
`

export const Medico = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`

export const MedicoContainer = styled.View`
    margin-right: 10px;
    margin-bottom: 10px;
    align-items: flex-end;
`