import img from '@assets/keepitup.png';
import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Bold, Container, Header, Img, SubHeader } from "./styles";

export function OnTheDiet() {
    const navigation = useNavigation()

    function handleGoHome() {
        navigation.navigate('meals')
    }

    return (
        <Container>
            <Header>Continue assim!</Header>
            <SubHeader>Você continua <Bold>dentro da dieta</Bold>. Muito bem!</SubHeader>

            <Img source={img} />

            <ButtonIcon title="Ir para página inicial" width="200" onPress={handleGoHome} />
        </Container>
    )
}