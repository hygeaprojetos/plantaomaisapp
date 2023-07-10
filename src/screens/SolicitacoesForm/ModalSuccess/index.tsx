import { useNavigation } from "@react-navigation/native";
import { Button, Circle1, Circle2, Container, ContentContainer, Desc, TextButton, TextContainer, Title } from "./style"
import { Feather } from '@expo/vector-icons'; 

interface ModalProps {
    visible: boolean
    onClose: () => void
}

export const ModalSuccess = ({visible, onClose}: ModalProps) => {
    return <Container visible={visible}>
        <ContentContainer>
            <Circle1>
                <Circle2>
                    <Feather name="check" size={50} color="white" />
                </Circle2>
            </Circle1>
            <TextContainer>
                <Title>
                    Sucesso!
                </Title>
                <Desc>
                    {`Voce solicitou sua\ndeclaração {'nome'},\nem breve ja estara disponivel\nna aba de documentos.
                    `}
                </Desc>
            </TextContainer>
            <Button onPress={onClose}>
                <TextButton>
                    Retornar a Dashboard
                </TextButton>
            </Button>
        </ContentContainer>
    </Container>
}