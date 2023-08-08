import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION, MealProps } from "@storage/storageConfig";
import { orderMealGroupsByDate } from "@utils/orderMealGroupByDate";
import { orderMealsByHour } from "@utils/orderMealsByHour";
import { mealGetAll } from "./mealGetAll";

export async function addMeal(meal: MealProps) {
  try {
    const storedMealGroups = await mealGetAll();

    const groupAlreadyExists = storedMealGroups.filter((group) => group.date === meal.date);

    if (groupAlreadyExists.length > 0) {
      const newMealGroups = storedMealGroups.map((group) => {
        if (group.date === meal.date) {
          const mealGroupOrdered = orderMealsByHour([...group.meals, meal]);

          return {
            date: group.date,
            meals: mealGroupOrdered,
          };
        } else {
          return group;
        }
      });

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMealGroups));
    } else {
      const newGroup = { date: meal.date, meals: [meal] };
      const newMealGroups = orderMealGroupsByDate([...storedMealGroups, newGroup]);

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMealGroups));
    }
  } catch (error) {
    throw error;
  }
}
