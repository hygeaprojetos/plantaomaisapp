import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex: 1;
    justify-content: end;
    background-color: rgba(0, 0, 0, 0.6);
`
export const ContainerModal = styled.View`
    background-color: #fff;
    height: 30%;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    align-items: center;
    padding-bottom: 32px;
`
export const Title = styled.Text`
    font-size: 24px;
    margin-top: 32px;
    text-align: center;
    font-weight: bold;
`
export const ContainerDescription = styled.View`
    padding: 0 30px;
`
export const Description = styled.Text`
    font-size: 14px;
    color: #878787;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 28px;
`
export const ContainerButton = styled.TouchableOpacity`
    background-color: #00A84D;
    padding: 16px 0px;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    width: 90%;
`
export const TextButton = styled.Text`
    color: #fff;
    font-size: 18px;
`