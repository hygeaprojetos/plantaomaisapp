import React from 'react'

import {
  Container, 
  Title,
  Anout 
} from './styles'

import anout from '../../../assets/anout.png'

interface Props {
  title: string;
}

export function ListDocuments({title}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Anout source={anout}/>
    </Container>
  )
}