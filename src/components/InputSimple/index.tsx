import { Container, Input, Label } from "./style"

interface InputSimple {
    value: string
    placeholder: string
    onChange: (text: string) => void
    label: string
    multiline?: boolean
    maxLength?: number
}

export const InputSimple = ({value, placeholder, onChange, label, multiline, maxLength}: InputSimple) => {
   
    return <Container multiline={multiline}>
        <Label>{label}:</Label>
        <Input 
            value={value} 
            placeholder={placeholder} 
            onChangeText={onChange}
            multiline={!!multiline}
            numberOfLines={!!multiline ? 4 : 1}
            maxLength={maxLength ?? 200}
        />
    </Container>
}