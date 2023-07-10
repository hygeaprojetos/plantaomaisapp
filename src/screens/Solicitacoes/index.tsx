import { useNavigation } from "@react-navigation/native"
import { Container, ContentContainer, Wellcome } from "./styles"
import { Header } from "../dashboard/Header"
import { Button } from "./Button"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamsList } from "../../routes/auth.routes"

export const Solicitacoes = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
    return <Container>
        <Header mode="reduzido"/>
        <ContentContainer>
            <Wellcome>Que tipo de solicitação podemos auxiliar você?</Wellcome>
            <Button 
                onPress={() => navigation.navigate("SolicitacoesForm", {type: 'tempo de serviço'})}
                type="time"
                title="Tempo de Serviço"
                subTitulo="Lorem Ipsum is simply dummy text of, Lorem Ipsum is simply dummy text of "
            />
            <Button 
                onPress={() => navigation.navigate("SolicitacoesForm", {type: 'Declaração de rendimentos'})}
                type="news"
                title="Declaração de rendimentos"
                subTitulo="Lorem Ipsum is simply dummy text of, Lorem Ipsum is simply dummy text of "
            />
        </ContentContainer>
    </Container>
}