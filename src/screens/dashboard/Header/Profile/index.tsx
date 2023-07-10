import { useNavigation } from "@react-navigation/native";
import { PropsHeader } from "../style";
import { IconContainer, BellPin, Container, Name, Photo, ProfileContainer, TextContainer, Wellcome, MedicoContainer, Medico, Email } from "./style"
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons'; 

export interface PropsProfile {
    mode: PropsHeader['mode'];
}

export const Profile = ({mode}: PropsProfile) => {
    const navigation = useNavigation()
    return <Container mode={mode}>
        {
            mode !== 'reduzido' ? 
            <>
                <ProfileContainer mode={mode}>
                    <Photo/>
                    <TextContainer>
                        <Wellcome>Olá, bem vindo Dr.(a) 🎉</Wellcome>
                        <Name>Papai noel</Name>
                    </TextContainer>
                </ProfileContainer>
                
                <IconContainer>
                    <BellPin/>
                    <SimpleLineIcons name="bell" size={24} color="white" />
                </IconContainer>
            </> : <></>
        }
        {
            mode === 'reduzido' ? 
            <>
                <ProfileContainer mode={mode}>
                    <IconContainer onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-chevron-back-outline" size={24} color="white" />
                    </IconContainer>
                    <MedicoContainer>
                        <Medico>Dr.Papai noel</Medico>
                        <Email>papai.noel@treno.com.br</Email>
                    </MedicoContainer>
                    <Photo/>
                </ProfileContainer>
            </> : <></>
        }
    </Container>
}