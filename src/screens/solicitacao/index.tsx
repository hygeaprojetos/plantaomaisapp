import {ActivityIndicator, Linking} from "react-native"
import { AnexoContainer, AnexoSubtitle, AnextoTitle, Container, ContentContainer, IconContainer, Label, LoadingContainer, MessagContainer, Message, Title, Wellcome} from "./styles"
import { Header } from "../dashboard/Header"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { Ionicons } from '@expo/vector-icons'; 
 

export const Solicitacao = ({route}) => {
    const [solicitacao, setSolicitacao] = useState({})
    const [loading, setLoading] = useState(true)

    const get = async () => {
        try{ 
            const soliciatacoesList = await api.get(`http://127.0.0.1:3001/solicitacoes/get/${route.params.id}`, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLmppbWVuZXNAZG9jc29sdXRpb25tZWQuY29tLmJyIiwibmFtZSI6InNldHNldCIsInBob25lIjoic2V0c2V0IiwiaWF0IjoxNjg4OTk2MTU1LCJleHAiOjE2ODk2MDA5NTV9.nwv-w-dapjrvo-oBs00N8lgIwt5v0tTFtkwsSI--lZE"
                }
            })
            console.log(soliciatacoesList.data)
            setSolicitacao(soliciatacoesList.data.response)
            setLoading(false)
        } catch(err){

        }
    }

    useEffect(() => {
        get()
    }, [])

    if(loading) {
        return <LoadingContainer>
            <ActivityIndicator color={"#000"} size={"large"}/>
        </LoadingContainer>
    }

    return <Container>
        <Header mode="reduzido"/>
        <ContentContainer>
            <Wellcome>{solicitacao?.titulo}</Wellcome>
            <Label>
                Mensagem:
            </Label>
            <MessagContainer>
                <Message>
                    {solicitacao?.mensagemResposta}
                </Message>
            </MessagContainer>
            <AnexoContainer onPress={async () => {
                if(solicitacao?.document[0]) {
                    const supported = await Linking.canOpenURL(solicitacao?.document[0]);
                    if(supported){
                        await Linking.openURL(solicitacao?.document[0]);
                    }
                }
            }}>
                <IconContainer>
                    <Ionicons name="md-document-text" size={24} color="#04946F" />
                </IconContainer>
                <AnextoTitle>
                    {solicitacao?.titulo}
                </AnextoTitle>
                <AnexoSubtitle>
                    {solicitacao?.subtitulo}
                </AnexoSubtitle>
            </AnexoContainer>
        </ContentContainer>
    </Container>
}