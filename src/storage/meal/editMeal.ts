import { MealProps } from "@storage/storageConfig";
import { addMeal } from "./addMeal";
import { mealRemove } from "./mealRemove";

export async function editMeal(meal: MealProps, newMeal: MealProps) {
  try {
    await mealRemove(meal);
    await addMeal(newMeal);
  } catch (error) {
    throw error;
  }
}
