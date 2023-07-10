import styled from "styled-components/native";

export const Container = styled.Modal`
`

export const ContentContainer = styled.View`
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
`

export const Circle1 = styled.View`
    border-color: #00936F;
    border-width: 2px;
    background-color:#E0FFE5;
    width: 150px;
    height: 150px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`

export const Circle2 = styled.View`
    background-color: #00936F;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.View``

export const Title = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`

export const Desc = styled.Text`
    text-align: center;
    font-size: 14px;
`

export const Button = styled.TouchableOpacity`
    border-color: #00936F;
    border-width: 2px;
    height: 50px;
    width: 60%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`

export const TextButton = styled.Text`
    color: #00936F;
`