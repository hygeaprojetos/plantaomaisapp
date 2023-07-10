import { Container, Input } from "./style"
import { EvilIcons, Octicons } from '@expo/vector-icons'; 

export const Search = () => {
    return <Container>
        <EvilIcons name="search" size={24} color="white" />
        <Input
        //  onChangeText={onChangeNumber}
        //  value={number}
        placeholderTextColor="#ffffff"
         placeholder="Faça sua busca..."
        />
        <Octicons name="filter" size={24} color="white" />
    </Container>
}