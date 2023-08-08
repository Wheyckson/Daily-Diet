import { TouchableOpacityProps } from "react-native";
import { BackButton, BackIcon, Container, HeaderContainer, HeaderText, StringProps } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    inDiet?: StringProps;
}

export function HeaderPage({ title, inDiet = 'GRAY_5', ...rest }: Props) {
    return (
        <Container inDiet={inDiet}>
            <HeaderContainer>
                <BackButton {...rest}>
                    <BackIcon />
                </BackButton>

                <HeaderText>{title}</HeaderText>
            </HeaderContainer>
        </Container>
    )
}