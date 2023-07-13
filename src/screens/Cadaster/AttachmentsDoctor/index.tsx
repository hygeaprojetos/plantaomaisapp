import React, { useState, useContext } from "react";
import * as DocumentPicker from "expo-document-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { ActivityIndicator, Text } from "react-native";
import { AuthContext, UpdateProps } from "../../../context/AuthContext";

import { useNavigation,RouteProp, useRoute } from "@react-navigation/native";

export function AttachmentsDoctor({ navigation, route }) {

  const {atualizarAnexos, etapaCadaster} = useContext(AuthContext)

  const navigationContent = useNavigation();

  const [anexos, setAnexos] = useState([]);

  console.log('{kkk}', etapaCadaster)

  console.log('anexos', anexos)
  const [loading, setLoading] = useState(false);

  const getDocument = async (index: 0 | 1) => {
    //setLoading(true);
    try {
      const doc = await DocumentPicker.getDocumentAsync({ multiple: false });
      if (doc.type === "success") {
        const formData = new FormData();
  
        formData.append("file", {
          uri: doc.uri,
          type: doc.mimeType,
          name: `upload`,
        } as unknown as File);
  
        const token = await AsyncStorage.getItem('tokenPL');
        const host = "http://10.0.12.10:3001";
        const response = await fetch(`${host}/anexo/send`, {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
  
        const responseData = await response.json();
  
        const newArray = [...anexos];
        newArray[index] = {
          anexo: responseData.response.images[0],
          tipo: index === 0 ? "Frente" : "Verso",
          observacao: "",
          status: "Pendente",
          action: "create"
        };
  
        setAnexos(newArray);
        //setLoading(false);
      }
    } catch (err) {
      console.log("ERRRRROR", JSON.stringify(err));
      //setLoading(false);
    }
  };

  function goBackAnexo(){
    if(atualizarAnexos(route.params.typeAnexo, anexos)){
      navigationContent.navigate("AttachmentsCadaster")
    }
  }
  

  return (
    <Container>
      <Title>Diploma médico</Title>

      <ContainerBox>
        <Box>
          <FlexItems>
            <BoxIcon onPress={() => (loading ? () => {} : getDocument(0))}>
              {/* {loading ? <ActivityIndicator /> : <Icon source={icon} />} */}
            </BoxIcon>
            <Name>Anexo frente</Name>
            <AnexoIcon>
              <Icon source={anex} />
            </AnexoIcon>
          </FlexItems>
        </Box>
        {/* {anexos[0] ? <Text>{anexos[0].anexo}</Text> : <></>} */}
        <Box>
          <FlexItems>
            <BoxIcon onPress={() => (loading ? () => {} : getDocument(1))}>
              {loading ? <ActivityIndicator /> : <Icon source={icon} />}
            </BoxIcon>
            <Name>Anexo verso</Name>
            <AnexoIcon>
              <Icon source={anex} />
            </AnexoIcon>
          </FlexItems>
        </Box>
        {/* {anexos[1] ? <Text>{anexos[1].anexo}</Text> : <></>} */}
      </ContainerBox>
      <Button
        title="Anexar"
        onPress={() => goBackAnexo()}
      />
    </Container>
  );
}
