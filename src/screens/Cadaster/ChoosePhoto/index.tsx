import React, { useState } from "react";
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  BoxCam,
  BoxGalery,
  IconCam,
  IconGalery,
  Title,
  Description,
} from "./styles";

import cam from "../../../assets/cam.png";
import galery from "../../../assets/galery.png";

import { api } from "../../../services/api";
import { Button } from "../../../components/Button";
import { ContainerButton } from "../ConfirmName/styles";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function ChoosenPhoto() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [visibleBorder, setVisibleBorder] = useState<any>("not");

  const [anexos, setAnexos] = useState("")
  const [loading, setLoading] = useState(false)

  //console.log("anexos", anexos)

const getDocument = async () => {
  setLoading(true);
  try {
    const doc = await DocumentPicker.getDocumentAsync({ multiple: false });
    if (doc.type === 'success') {
      const formData = new FormData();
      formData.append('file', {
        uri: doc.uri,
        type: doc.type,
        name: 'upload'
      });

      const host = 'http://10.0.12.10:3001';
      const token = await AsyncStorage.getItem('tokenPL');
      const response = await api.post(`${host}/anexo/send`, formData, {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = response.data;
      console.log('{RESPONSE}', data.response);
      setAnexos(data.response.image);
      setLoading(false);
    }
  } catch (err) {
    console.log('ERROR', err);
    setLoading(false);
  }
};


  const openCamera = () => {
    if (visibleBorder === "photo") {
      // navigation.navigate("CameraPhoto");
      //alert('em teste')
      navigation.navigate("FormPreCadaster")
    } else navigation.navigate("FormPreCadaster", anexos)
  };

  return (
    <Container>
      <BoxCam onPress={() => setVisibleBorder("photo")}>
        {visibleBorder === "photo" ? (
          <>
            <IconCam source={cam} />
            <Title style={{ color: "#01926D" }}>Tirar uma foto</Title>
            <Description>Prefiro tirar uma foto nova!</Description>
          </>
        ) : (
          <>
            <IconCam source={cam} />
            <Title>Tirar uma foto</Title>
            <Description>Prefiro tirar uma foto nova!</Description>
          </>
        )}
      </BoxCam>

      <BoxGalery onPress={() => loading ? () => {} : getDocument(0)}>
        {/* {visibleBorder === "galery" ? (
          <>
            <IconGalery source={galery} />
            <Title style={{ color: "#01926D" }}>Escolher da galeria</Title>
            <Description>
              Já tenho uma foto preparada{"\n"}
              para a ocasião.
            </Description>
          </>
        ) : (
        )} */}
          <>
            <IconGalery source={galery} />
            <Title>Escolher da galeria</Title>
            <Description>
              Já tenho uma foto preparada{"\n"}
              para a ocasião.
            </Description>
          </>
      </BoxGalery>

      <ContainerButton>
        {visibleBorder === "not" ? (
          <Button
            //type="disabled"
            onPress={() => navigation.navigate("FormPreCadaster")}
            title="Próximo"
          />
        ) : (
          <Button onPress={() => openCamera()} title="Próximo" />
        )}
      </ContainerButton>
    </Container>
  );
}
