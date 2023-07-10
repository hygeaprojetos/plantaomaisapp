import { Search } from "../../../components/search"
import { Profile } from "./Profile"
import { Container, PropsHeader } from "./style"

export interface PropsProfile {
    mode: PropsHeader['mode'];
}
export const Header = ({mode}: PropsProfile) => {
    return <Container mode={mode}>
        {
            mode === 'aberto' ? 
            <>
                <Profile mode={mode}/>
                <Search/>
            </> : <></>
        }
        {
            mode === 'reduzido' ? 
            <>
                <Profile mode={mode}/>
            </> : <></>
        }
        
    </Container>
}