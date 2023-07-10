import { useNavigation } from "@react-navigation/native"
import { DashboardItem } from "../../components/DashboardItem"
import { Button } from "./Button"
import { Header } from "./Header"
import { Container, ContentContainer, ItemsContainer, Wellcome } from "./style"

export const Dashboard = () => {
    const navigation = useNavigation()
    return <Container>
        <Header mode="aberto"/>
        <ContentContainer>
            <Wellcome>Em que podemos auxiliar você?</Wellcome>
            <ItemsContainer>
                <DashboardItem/>
                <DashboardItem/>
                <DashboardItem/>
                <DashboardItem/>
            </ItemsContainer>
            <Button 
                onPress={() => navigation.navigate("Solicitacoes")}
                color="blue"
                title="Solicitações"
                subTitulo="Lorem Ipsum is simply dummy text of, Lorem Ipsum is simply dummy text of "
            />
            <Button 
                onPress={() => navigation.navigate("SolicitacoesList")}
                color="green"
                title="Minhas solicitações"
                subTitulo="Lorem Ipsum is simply dummy text of, Lorem Ipsum is simply dummy text of "
            />
        </ContentContainer>
    </Container>
}