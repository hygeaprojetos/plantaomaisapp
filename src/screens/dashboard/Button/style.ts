import styled from "styled-components/native";

export interface Props {
    color: 'blue' | 'green'
}

export const Container = styled.View``

export const Content = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    background-color: ${(p: Props) => p.color === 'blue' ? '#234A6B' : '#04946F' };
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

export const CenteredContent = styled.View`
    flex: 1;
`

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
`

export const SubTitle = styled.Text`
    color: #fff;
    font-size: 12px;
`

export const Hand = styled.View`
    align-self: flex-start;
    padding: 20px;
`
export const Right = styled.View`
    padding: 20px;
`