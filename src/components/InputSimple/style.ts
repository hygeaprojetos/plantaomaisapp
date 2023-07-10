import styled from "styled-components/native";

interface ContainerProps {
    multiline: boolean
}

export const Container = styled.View``

export const Label = styled.Text`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Input = styled.TextInput`
    border-color: rgba(11, 11, 11, 0.1);
    border-width: 2px;
    border-radius: 20px;
    height: 50px;
    padding-left: 15px;
    ${(p: ContainerProps) => !!p.multiline ? 'height: 100px; margin-bottom: 10px; padding-top: 10px' : '' }
`