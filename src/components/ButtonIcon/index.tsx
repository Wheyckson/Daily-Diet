import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from "react-native/types";
import { ColorTypeProps, Container, Icon, Title, WidthButtonProps } from "./styles";

type Props = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap;
    title: string;
    width?: WidthButtonProps;
    colorType?: ColorTypeProps
}

export function ButtonIcon({ icon, title, width = "auto", colorType = 'Primary', ...rest }: Props) {
    return (
        <Container width={width} colorType={colorType} {...rest}>
            <Icon name={icon} colorType={colorType} />
            <Title colorType={colorType}>{title}</Title>
        </Container>
    )
}