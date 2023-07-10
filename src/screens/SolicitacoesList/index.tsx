import { useNavigation } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons';
import { Container, ContentContainer, DateContainer, DateTitile,DateTime, Icon, ItemContainer, ItemText, Wellcome, Left } from "./styles"
import { Header } from "../dashboard/Header"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamsList } from "../../routes/auth.routes"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
 

export const SolicitacoesList = () => {
    const [solicitacoes, setSolicitacoes] = useState([])
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
    
    const list = async () => {
        try{ 
            const soliciatacoesList = await api.get('http://127.0.0.1:3001/solicitacoes/list/c86d9c8e-da94-4fc0-b402-957fcd2bc028', {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLmppbWVuZXNAZG9jc29sdXRpb25tZWQuY29tLmJyIiwibmFtZSI6InNldHNldCIsInBob25lIjoic2V0c2V0IiwiaWF0IjoxNjg4OTk2MTU1LCJleHAiOjE2ODk2MDA5NTV9.nwv-w-dapjrvo-oBs00N8lgIwt5v0tTFtkwsSI--lZE"
                }
            })

            setSolicitacoes(soliciatacoesList.data.response)
        } catch(err){

        }
    }

    useEffect(() => {
        list()
    }, [])

    return <Container>
        <Header mode="reduzido"/>
        <ContentContainer>
            <Wellcome>Ver todas as Solicitações.</Wellcome>
            {
                solicitacoes.map(({titulo, id}) => {
                    return <ItemContainer onPress={() => navigation.navigate('Solicitacao', {
                        id:id
                    })}>
                        <Left>
                            <Icon>
                                <Feather name="check" size={20} color="white" />
                            </Icon>
                            <ItemText numberOfLines={1}>
                                {titulo}
                            </ItemText>
                        </Left>
                        <DateContainer>
                            <DateTitile>
                                enviado as
                            </DateTitile>
                            <DateTime>
                                09:08
                            </DateTime>
                        </DateContainer>
                    </ItemContainer>
                })
            }
        </ContentContainer>
    </Container>
}