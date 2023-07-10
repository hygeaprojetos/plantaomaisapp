import { Container } from "../style"
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { CenteredContent, Content, SubTitle, Title, Hand, Right } from "./style";

export interface PropsButton {
    title: string;
    subTitulo: string;
    color: 'blue' | 'green',
    onPress?: () => void
}

export const Button = ({title, subTitulo, color, onPress}: PropsButton) => {
    return <Container>
        <Content color={color} onPress={onPress}>
            <Hand>
                {
                    color === 'blue' ? 
                        <FontAwesome5 name="hand-pointer" size={24} color="white" /> 
                        : <MaterialCommunityIcons name="message" size={24} color="white" />
                }
            </Hand>
            <CenteredContent>
                <Title>
                    {title}
                </Title>
                <SubTitle numberOfLines={2}>
                   {subTitulo}
                </SubTitle>
            </CenteredContent>
            <Right>
                <AntDesign name="right" size={24} color="white" />
            </Right>
        </Content>
    </Container>
}