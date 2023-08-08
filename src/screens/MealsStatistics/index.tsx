
import { Loading } from "@components/Loading";
import { useNavigation } from "@react-navigation/native";
import { getStats } from "@utils/getStats";
import { useEffect, useState } from "react";
import { BackButton, BackIcon, Card, CardGreen, CardRed, Container, DualCardContainer, Header, Label, NumberTitle, StatisticsContainer, Subtitle, Title } from "./styles";

export type GeneralStatsType = {
    numberOfMeals: number;
    numberOfMealsOutDiet: number;
    bestSequenceInDiet: number;
    percentageInDiet: string;
};

export function MealsStatistics() {
    const [isLoading, setIsLoading] = useState(true)

    const [stats, setStats] = useState<GeneralStatsType>({} as GeneralStatsType)

    const navigation = useNavigation()

    const {
        numberOfMeals,
        numberOfMealsOutDiet,
        percentageInDiet,
        bestSequenceInDiet,
    } = stats;

    function handleGoBack() {
        navigation.navigate('meals')
    }

    useEffect(() => {
        (async () => {
            const stats = await getStats();
            setStats(stats);
            setIsLoading(false);
        })();
    }, []);

    return (
        <Container>

            {isLoading
                ? <Loading />
                :
                <>
                    <Header number={percentageInDiet}>
                        <BackButton onPress={handleGoBack}>
                            <BackIcon number={percentageInDiet} />
                        </BackButton>

                        <Title> {percentageInDiet}% </Title>
                        <Subtitle> das refeições dentro da dieta </Subtitle>
                    </Header><StatisticsContainer>
                        <Label> Estatísticas gerais </Label>

                        <Card>
                            <NumberTitle>{bestSequenceInDiet}</NumberTitle>
                            <Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
                        </Card>

                        <Card>
                            <NumberTitle>{numberOfMeals}</NumberTitle>
                            <Subtitle>refeições registradas</Subtitle>
                        </Card>

                        <DualCardContainer>
                            <CardGreen>
                                <NumberTitle>{numberOfMeals - numberOfMealsOutDiet}</NumberTitle>
                                <Subtitle>refeições dentro da dieta</Subtitle>
                            </CardGreen>

                            <CardRed>
                                <NumberTitle>{numberOfMealsOutDiet}</NumberTitle>
                                <Subtitle>refeições fora da dieta</Subtitle>
                            </CardRed>
                        </DualCardContainer>

                    </StatisticsContainer></>
            }
        </Container >
    )
}