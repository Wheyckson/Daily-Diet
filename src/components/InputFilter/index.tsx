import { TouchableOpacityProps } from "react-native";
import { Button, ColorType, Container, FilterStyleProps, Text } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function InputFilter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container>
            <Button isActive={isActive} textButton={title} {...rest}>

                <Text> <ColorType textButton={title} /> {title}</Text>
            </Button>
        </Container>
    )
}