import React from 'react'

import {
    Container,
    Logo,
    TitleName,
    Description,
    ContainerButton
} from './styles'

import logo from '../../../assets/logobg.png'

import {Button} from '../../../components/Button'

import { useNavigation } from '@react-navigation/native'

export function ConfirmName() {
  
  const navigation = useNavigation()
  
  return (
    <Container>

      <Logo source={logo}/>

      <TitleName>ok Dr(a) {'Mateus Nascimento'}</TitleName>

      <Description>
      Agora precisamos tirar uma foto para{'\n'}deixar seu cadastro mais completo!
      </Description>

      <ContainerButton>
      <Button onPress={() => navigation.navigate("ChoosenPhoto")} title="Vamos lá"/>
      </ContainerButton>
    </Container>
  )
}