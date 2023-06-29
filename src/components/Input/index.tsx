import React from 'react'

import {
    BoxInput,
    TextInput
} from './styles'

import { Feather } from '@expo/vector-icons';

interface PropsInput {
    placeholder?: string
    type?: "password";
    value?: string;
    onChangeText?: (value: string) => void
}

export function Input({placeholder, type, value, onChangeText}: PropsInput) {

  return (
    <BoxInput>
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#01926D"    
        />
       {type == "password" && <Feather name="eye-off" size={25} color="#01926D" />}
    </BoxInput>
  )
}