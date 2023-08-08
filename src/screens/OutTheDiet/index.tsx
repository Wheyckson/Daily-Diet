import img from '@assets/whatashame.png';
import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Bold, Container, Header, Img, SubHeader } from "./styles";

export function OutTheDiet() {
    const navigation = useNavigation()

    function handleGoHome() {
        navigation.navigate('meals')
    }

    return (
        <Container>
            <Header>Que pena!</Header>
            <SubHeader>Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!</SubHeader>

            <Img source={img} />

            <ButtonIcon title="Ir para página inicial" width="200" onPress={handleGoHome} />
        </Container>
    )
}