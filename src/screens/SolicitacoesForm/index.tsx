import { useNavigation } from "@react-navigation/native"
import { ActivityIndicator } from 'react-native'
import { Container, ContentContainer, Wellcome, Button, ButtonText } from "./styles"
import { Header } from "../dashboard/Header"
import { InputSimple } from "../../components/InputSimple"
import { ModalSuccess } from "./ModalSuccess"
import { useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamsList } from "../../routes/auth.routes"
import { api } from '../../services/api'


export const SolicitacoesForm= ({route}) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        dataInicio: "",
        dataFim: "",
        local: "",
        mensagemSolicitacao: "",
    })

    function format(string: string){
        const value = string.replace(/^(\d{2})(\d{2})(\d{4})$/g, '$1/$2/$3').slice(0, 10)
        
        return value
    }

    const handleSoliciatacoesCreate = async () => {
        try {
            setLoading(true)

            await api.post('http://127.0.0.1:3001/solicitacoes/create', {
                "titulo": route.params.type,
                "dataInicio": `${data.dataInicio.split('/').reverse().join('-')} 00:00:00`,
                "dataFim": `${data.dataFim.split('/').reverse().join('-')} 00:00:00`,
                "local": data.local,
                "mensagemSolicitacao": data.mensagemSolicitacao,
                "medicoID": "c86d9c8e-da94-4fc0-b402-957fcd2bc028"
            }, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLmppbWVuZXNAZG9jc29sdXRpb25tZWQuY29tLmJyIiwibmFtZSI6InNldHNldCIsInBob25lIjoic2V0c2V0IiwiaWF0IjoxNjg4OTk2MTU1LCJleHAiOjE2ODk2MDA5NTV9.nwv-w-dapjrvo-oBs00N8lgIwt5v0tTFtkwsSI--lZE"
                }
            })

            setModal(true)
            setLoading(false)
        } catch(err) {
            setLoading(false)
        }
    }

    return <Container>
        <Header mode="reduzido"/>
        <ContentContainer>
            <Wellcome>Você solicitou uma {route.params.type === "tempo de serviço" ? `Declaração ${route.params.type}` : route.params.type }?</Wellcome>
            <InputSimple 
                label="Data Inicial" 
                value={data.dataInicio}
                placeholder="00/00/0000" 
                onChange={(text: string) => setData({...data, dataInicio: format(text)})}
                maxLength={10}
            />
            <InputSimple 
                label="Data Final" 
                value={data.dataFim}
                placeholder="00/00/0000" 
                onChange={(text: string) => setData({...data, dataFim: format(text)})}
                maxLength={10}
            />
            <InputSimple 
                label="Local do serviço" 
                value={data.local}
                placeholder="Nome do local..." 
                onChange={(text: string) => setData({...data, local: text})}
            />
            <InputSimple 
                multiline={true}
                label="Mensagem" 
                value={data.mensagemSolicitacao}
                placeholder="Sua mensagem" 
                onChange={(text: string) => setData({...data, mensagemSolicitacao: text})}
            />
            <Button onPress={() => {
                if(!loading) {
                    handleSoliciatacoesCreate()
                }
            }}>
                {!loading ? 
                    <ButtonText>
                    Enviar solicitação
                    </ButtonText>
                    : <ActivityIndicator color={'white'} size='small'/>
                } 
            </Button>
        </ContentContainer>
        <ModalSuccess visible={modal} onClose={() => {
            setModal(false)
            setTimeout(() => {
                navigation.navigate('Dashboard')
            }, 200)
        }}/>
    </Container>
}