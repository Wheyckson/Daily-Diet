import { MealProps } from "@storage/storageConfig";

export const orderMealsByHour = (meals: MealProps[]) => {
  const orderedMeals = meals.sort((a, b): any => {
    const aTimeFormatted = a.time.replace(":", "");
    const bTimeFormatted = b.time.replace(":", "");

    return aTimeFormatted < bTimeFormatted;
  });

  return orderedMeals;
};
