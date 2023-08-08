import AvatarImg from '@assets/avatar.png';
import logoImg from '@assets/logo.png';
import { Avatar, Container, Logo } from "./styles";


export function HeaderLogo() {
    return (
        <Container>
            <Logo source={logoImg} />
            <Avatar source={AvatarImg} />
        </Container>
    )
}