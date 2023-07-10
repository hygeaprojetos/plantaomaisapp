import { Container, SubTitle, Title } from "./style"
import { Ionicons } from '@expo/vector-icons'; 
export const DashboardItem = () => {
    return <Container>
    <Ionicons name="md-people-sharp" size={24} color="#04946F" />
        <Title>
            Perfil de usuario
        </Title>
        <SubTitle>
            Lorem Ipsum is simply dummy text of 
        </SubTitle>
    </Container>
}