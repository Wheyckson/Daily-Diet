import { ButtonIcon } from "@components/ButtonIcon";
import { HeaderLogo } from "@components/HeaderLogo";
import { ListEmpty } from "@components/ListEmpty";
import { Percent } from "@components/Percent";

import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { MealGroupProps } from "@storage/storageConfig";
import { getStats } from "@utils/getStats";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { ColorSnack, Container, ConteinerButton, GroupCard, HeaderCard, HourCard, ItemCard, Separator, SnackCard, StringType } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function Meals() {
    const [isLoading, setIsLoading] = useState(true)

    const [stats, setStats] = useState<any>()
    const [meals, setMeals] = useState<MealGroupProps[]>([])

    const navigation = useNavigation()

    function handleMealsStatistics() {
        navigation.navigate('statistics')
    }

    function handleNewMeal() {
        navigation.navigate('newMeal')
    }

    function handleMealDetail(meal: any) {
        navigation.navigate('mealDetail', { meal: meal.item })
    }

    function StringDots(text: string) {
        if (meals) {
            const limit = 23
            const aboveLimit = text.length > limit
            const dotsOrEmpty = aboveLimit ? ' ...' : ''
            return text = text.substring(0, limit) + dotsOrEmpty
        }
    }

    async function fetchMeals() {
        try {
            setIsLoading(true)
            const data = await mealGetAll();
            const lastStats = await getStats();

            setMeals(data);
            setStats(lastStats);

        } catch (error) {
            Alert.alert('Refeições', 'Não foi possivel carregar as refeições')
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchMeals()
        }, []))

    // AsyncStorage.clear();
    return (
        <Container>
            <HeaderLogo />

            {!isLoading ? <Percent percentMeals={stats.percentageInDiet} onPress={handleMealsStatistics} number={stats.percentageInDiet} /> : ''}

            <ConteinerButton>
                <StringType>Refeições</StringType>
                <ButtonIcon icon="add" title="Nova refeição" onPress={handleNewMeal} />
            </ConteinerButton>

            {isLoading
                ? <Loading />
                :
                <FlatList
                    data={meals}
                    keyExtractor={(group) => group.date}
                    ListEmptyComponent={() => (
                        <>
                            <ListEmpty message='Que tal cadastrar a primeira refeição?' />
                        </>
                    )}
                    renderItem={(group) => (
                        <>
                            <HeaderCard>
                                {group.item.date}
                            </HeaderCard>

                            <FlatList
                                data={group.item.meals}
                                keyExtractor={(meal) => meal.id.toString()}
                                contentContainerStyle={[{ paddingBottom: 100 }, meals.length === 0 && { flex: 1 }]}
                                renderItem={(meal) => (
                                    <GroupCard onPress={() => { handleMealDetail(meal) }}>
                                        <ItemCard>
                                            <HourCard>{meal.item.time}</HourCard>
                                            <Separator> | </Separator>
                                            <SnackCard>{StringDots(meal.item.name)} </SnackCard>
                                        </ItemCard>

                                        <ColorSnack color={meal.item.isInDiet} />
                                    </GroupCard>
                                )}
                            />
                        </>
                    )}
                />
            }
        </Container >
    )
}