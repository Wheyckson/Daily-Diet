import { TextInput, TextInputProps } from "react-native";
import { Container, HeightInputProps, InputText, Text } from "./styles";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
    title: string;
    height?: HeightInputProps;
    multiline?: boolean;
    maxLength?: number;
}

export function Input({ inputRef, title, height = "50", multiline, maxLength, ...rest }: Props) {
    return (
        <Container>
            <Text>{title}</Text>

            <InputText ref={inputRef} height={height} multiline={multiline} maxLength={maxLength} {...rest} />
        </Container>
    )
}