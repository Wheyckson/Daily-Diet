import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION, MealProps } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealRemove(mealDeleted: MealProps) {
  try {
    const storedMeals = await mealGetAll();

    const meals = storedMeals.map((group) => {
      if (group.date === mealDeleted.date) {
        const newMeals = group.meals.filter((meal) => meal.id !== mealDeleted.id);

        return {
          date: group.date,
          meals: newMeals,
        };
      } else {
        return group;
      }
    });

    const removeEmptyGroups = meals.filter((group) => group.meals.length > 0);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(removeEmptyGroups));
  } catch (error) {
    throw error;
  }
}
