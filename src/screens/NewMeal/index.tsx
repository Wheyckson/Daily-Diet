import { ButtonIcon } from "@components/ButtonIcon";
import { HeaderPage } from "@components/HeaderPage";
import { Input } from "@components/Input";
import { InputFilter } from "@components/InputFilter";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, FlatList, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { addMeal } from "@storage/meal/addMeal";
import { AppError } from "@utils/AppError";
import { Container, DataWrapper, FormWrapper, Text } from "./styles";

import uuid from 'react-native-uuid';

export function NewMeal() {
    const { control, handleSubmit } = useForm();

    const [inDiet, setInDiet] = useState('')

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('meals')
    }

    function navigateInDiet() {
        navigation.navigate('onTheDiet')
    }

    function navigateOutDiet() {
        navigation.navigate('outTheDiet')
    }

    async function handleCreateMeal(data: any) {
        const validInputs =
            data.name !== undefined &&
            data.description !== undefined &&
            data.data !== undefined &&
            data.time !== undefined &&
            inDiet !== undefined

        try {
            if (validInputs) {
                const newMeal = {
                    id: uuid.v4(),
                    name: data.name,
                    description: data.description,
                    date: data.data,
                    time: data.time,
                    isInDiet: inDiet === 'Sim' ? true : false,
                }

                await addMeal(newMeal)

                inDiet === 'Sim' ? navigateInDiet() : navigateOutDiet()
            }
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova refeição', error.message)
            } else {
                Alert.alert('Nova refeição', 'Não foi possivel adicionar essa refeição')
            }
        }
    }

    return (
        <Container>
            <HeaderPage title="Nova refeição" onPress={handleGoBack} />

            <FormWrapper>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={80}
                >
                    <ScrollView style={{ width: '100%' }}>


                        <Controller
                            name="name"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <Input title="Nome" onChangeText={onChange} />
                            )}
                        />

                        <Controller
                            name="description"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <Input title="Descrição" height="100" multiline onChangeText={onChange} />
                            )}
                        />

                        <DataWrapper>
                            <Controller
                                name="data"
                                control={control}
                                render={({ field: { onChange } }) => (
                                    <Input title="Data" maxLength={10} onChangeText={onChange} />
                                )}
                            />

                            <Controller
                                name="time"
                                control={control}
                                render={({ field: { onChange } }) => (
                                    <Input title="Hora" maxLength={5} onChangeText={onChange} />
                                )}
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

                        <ButtonIcon title="Cadastrar refeição" onPress={handleSubmit(handleCreateMeal)} />

                    </ScrollView>
                </KeyboardAvoidingView>
            </FormWrapper>

        </Container >
    )
}