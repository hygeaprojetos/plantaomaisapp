import React from 'react'

import {
    BoxButton,
    TextButton
} from './styles'

interface PropsInput {
    title?: string
}

export function Button({title}: PropsInput) {
  return (
    <BoxButton>
        <TextButton>{title}</TextButton>
    </BoxButton>
  )
}