import React, { useState } from "react";
import * as DocumentPicker from 'expo-document-picker';
import {
  Container,
  Title,
  ContainerBox,
  FlexItems,
  Box,
  Icon,
  BoxIcon,
  AnexoIcon,
  Name,
} from "./styles";

import icon from "../../../assets/attachments.png";
import anex from "../../../assets/anex.png";
import { Button } from "../../../components/Button";
import { api } from "../../../services/api";
import { ActivityIndicator, Text} from "react-native";

export function AttachmentsDoctor({ navigation, route }) {
  const [anexos, setAnexos] = useState([])
  const [loading, setLoading] = useState(false)
  
  const getDocument = async (index: 0 | 1) => {
    setLoading(true)
    try {
      const doc = await DocumentPicker.getDocumentAsync({multiple: false})
      if(doc.type === 'success'){
        const formData = new FormData();

        formData.append('file', {
          uri: doc.uri,
          type: doc.mimeType,
          name: `upload`
        } as unknown as File);
        
        const response = await api.post('/anexo/send', formData, {
          headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLmppbWVuZXNAZG9jc29sdXRpb25tZWQuY29tLmJyIiwibmFtZSI6InNldHNldCIsInBob25lIjoic2V0c2V0IiwiaWF0IjoxNjg4NDkxNTE2LCJleHAiOjE2ODkwOTYzMTZ9.m-XkRUBJ6_PKPzFS2bAMrWVYh2mwZxWhbGUf8zjxpoU',
            'Content-Type': 'multipart/form-data'
          }
        })

        const newArray = [...anexos]
        newArray[index] = response.data.response.images[0]

        setAnexos(newArray)
        setLoading(false)
      }
    } catch(err) {
      console.log('ERRRRROR', JSON.stringify(err))
      setLoading(false)
    }
  }

  return (
    <Container>
      <Title>Diploma médico</Title>

      <ContainerBox>
        <Box>
          <FlexItems>
            <BoxIcon onPress={() => loading ? () => {} : getDocument(0)}>
              { loading? <ActivityIndicator/> : <Icon source={icon} /> }
            </BoxIcon>
            <Name>Anexo frente</Name>
              <AnexoIcon>
            <Icon source={anex} />
            </AnexoIcon>
          </FlexItems>
        </Box>
        {anexos[0] ? <Text>{anexos[0]}</Text> : <></>}
        <Box>
          <FlexItems>
            <BoxIcon  onPress={() => loading ? () => {} : getDocument(1)}>
             { loading? <ActivityIndicator/> : <Icon source={icon} /> }
            </BoxIcon>
            <Name>Anexo verso</Name>
              <AnexoIcon>
            <Icon source={anex} />
            </AnexoIcon>
          </FlexItems>
        </Box>
        {anexos[1] ? <Text>{anexos[1]}</Text> : <></>}
      </ContainerBox>
      <Button title="Anexar" onPress={() => console.log({[route.params.typeAnexo]: anexos})}/>
    </Container>
  );
}
