import { ButtonIcon } from "@components/ButtonIcon";
import { HeaderPage } from "@components/HeaderPage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealRemove } from "@storage/meal/mealRemove";
import { MealProps } from "@storage/storageConfig";
import { Alert } from "react-native";
import { ButtonGroup, Container, Description, DetailContainer, Subtitle, Tag, TagColor, TagString, Time, Title } from "./style";

type RouteParams = {
    meal: MealProps
}

export function MealDetail() {
    const route = useRoute();
    const { meal } = route.params as RouteParams

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('meals')
    }

    function handleActionEdit() {
        navigation.navigate('editMeal', { meal: meal })
    }

    async function handleMealRemove() {
        try {
            await mealRemove(meal)
            navigation.navigate('meals')
        } catch (error) {
            Alert.alert('Refeição', 'Não foi possível excluir a refeição!')
        }
    }

    async function handleActionRemove() {
        Alert.alert(
            '',
            'Deseja realmente excluir o registro da refeição?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Sim, excluir', onPress: () => handleMealRemove() }
            ]
        )
    }

    return (
        <Container>
            {meal.isInDiet === true
                ?
                <HeaderPage title="Refeição" onPress={handleGoBack} inDiet='GREEN_LIGHT' />
                :
                <HeaderPage title="Refeição" onPress={handleGoBack} inDiet='RED_LIGHT' />
            }

            <DetailContainer>
                <Title>{meal.name}</Title>
                <Description>{meal.description}</Description>
                <Subtitle>Data e hora</Subtitle>
                <Time>{meal.date} ás {meal.time}</Time>

                <Tag>
                    <TagColor color={meal.isInDiet} />
                    <TagString>{meal.isInDiet === true ? 'dentro da dieta' : 'fora da dieta'}</TagString>
                </Tag>
            </DetailContainer>



            <ButtonGroup>
                <ButtonIcon icon="edit" title="Editar refeição" onPress={handleActionEdit} />
                <ButtonIcon icon="delete-outline" title="Excluir refeição" colorType="Secundary" onPress={handleActionRemove} />
            </ButtonGroup>

        </Container>
    )
}