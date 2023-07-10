import { Container } from "./style"
import { FontAwesome5, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import { CenteredContent, Content, SubTitle, Title, Hand, Right } from "./style";

export interface PropsButton {
    title: string;
    subTitulo: string;
    type: 'time' | 'news',
    onPress?: () => void
}

export const Button = ({title, subTitulo, type, onPress}: PropsButton) => {
    return <Container>
        <Content onPress={onPress}>
            <Hand>
                {
                    type === 'time' ? 
                        <Ionicons name="ios-time" size={24} color="#04946F" /> 
                        : <Ionicons name="ios-newspaper" size={24} color="#04946F" />
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
                <AntDesign name="right" size={24} color="#04946F" />
            </Right>
        </Content>
    </Container>
}