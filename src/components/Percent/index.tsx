import { TouchableOpacityProps } from "react-native";
import { CardColorProps, Container, Percents, RedirectIcon, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & CardColorProps & {
    percentMeals: number
    number: number
}

export function Percent({ percentMeals, ...rest }: Props) {
    return (
        <Container >
            <Percents {...rest}>
                <RedirectIcon number={percentMeals} />

                <Title> {percentMeals}% </Title>
                <Subtitle> das refeições dentro da dieta </Subtitle>
            </Percents>
        </Container>
    )
}