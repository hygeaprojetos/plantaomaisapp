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

export function ConfirmName() {
  return (
    <Container>

      <Logo source={logo}/>

      <TitleName>ok Dr(a) {'Mateus Nascimento'}</TitleName>

      <Description>
      Agora precisamos tirar uma foto para{'\n'}deixar seu cadastro mais completo!
      </Description>

      <ContainerButton>
      <Button title="Vamos lá"/>
      </ContainerButton>
    </Container>
  )
}