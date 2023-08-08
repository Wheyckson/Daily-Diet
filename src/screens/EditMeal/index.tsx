import { ButtonIcon } from "@components/ButtonIcon";
import { HeaderPage } from "@components/HeaderPage";
import { Input } from "@components/Input";
import { InputFilter } from "@components/InputFilter";
import { useNavigation, useRoute } from "@react-navigation/native";
import { editMeal } from "@storage/meal/editMeal";
import { MealProps } from "@storage/storageConfig";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, FlatList, ScrollView } from "react-native";
import { Container, DataWrapper, FormWrapper, Text } from "./styles";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

type RouteParams = {
    meal: MealProps;
};

export function EditMeal() {
    const navigation = useNavigation()
    const route = useRoute();

    const { meal } = route.params as RouteParams;
    const { control, handleSubmit } = useForm();

    const [inDiet, setInDiet] = useState(meal.isInDiet === true ? 'Sim' : 'Não')
    const [mealData, setMealData] = useState<MealProps>(meal);

    function handleGoBack() {
        navigation.navigate('meals')
    }

    function navigateInDiet() {
        navigation.navigate('onTheDiet')
    }

    function navigateOutDiet() {
        navigation.navigate('outTheDiet')
    }

    const handleChangeMealName = (name: string) => {
        const newMealData = {
            ...mealData,
            name,
        };

        setMealData(newMealData);
    };

    const handleChangeMealDescription = (description: string) => {
        const newMealData = {
            ...mealData,
            description,
        };

        setMealData(newMealData);
    };

    const handleChangeMealDate = (date: string) => {
        const newMealData = {
            ...mealData,
            date,
        };

        setMealData(newMealData);
    };

    const handleChangeMealTime = (time: string) => {
        const newMealData = {
            ...mealData,
            time,
        };

        setMealData(newMealData);
    };

    async function handleEditMeal() {
        try {
            const newMeal = {
                ...mealData,
                isInDiet: inDiet === 'Sim' ? true : false,
            };
            await editMeal(meal, newMeal);
            setMealData({} as MealProps);

            inDiet === 'Sim' ? navigateInDiet() : navigateOutDiet();
        } catch (error) {
            Alert.alert("Refeição", "Não foi possível editar a refeição!");
        }
    };

    return (
        <Container>
            <HeaderPage title="Editar refeição" onPress={handleGoBack} />

            <FormWrapper>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={80}
                >
                    <ScrollView style={{ width: '100%' }}>


                        <Input
                            title="Nome"
                            value={mealData.name}
                            onChangeText={(text) => handleChangeMealName(text)}
                        />

                        <Input
                            title="Descrição"
                            value={mealData.description}
                            height="100"
                            onChangeText={(text) => handleChangeMealDescription(text)}
                            multiline
                        />

                        <DataWrapper>
                            <Input
                                title="Data"
                                value={mealData.date}
                                maxLength={10}
                                onChangeText={(text) => handleChangeMealDate(text)}
                            />

                            <Input
                                title="Hora"
                                value={mealData.time}
                                maxLength={5}
                                onChangeText={(text) => handleChangeMealTime(text)}
                            />
                        </DataWrapper>

                        <Text>Está dentro da dieta? </Text>
                        <FlatList
                            data={['Sim', 'Não']}
                            keyExtractor={item => item}
                            renderItem={({ item }) => (
                                <InputFilter
                                    title={item}
                                    isActive={item === inDiet}
                                    onPress={() => setInDiet(item)}
                                />
                            )}
                            contentContainerStyle={[{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 20 }]}
                            horizontal
                        />

                        <ButtonIcon title="Editar refeição" onPress={handleSubmit(handleEditMeal)} />
                    </ScrollView>
                </KeyboardAvoidingView>

            </FormWrapper>
        </Container >
    )
}