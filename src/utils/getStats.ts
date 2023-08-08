import { mealGetAll } from "@storage/meal/mealGetAll";

export async function getStats() {
  const mealGroup = await mealGetAll();

  const numberOfMeals = mealGroup ? mealGroup.reduce((acc, mealGroup) => acc + mealGroup.meals.length, 0) : 0;

  const numberOfMealsOutDiet = mealGroup.reduce((acc, mealGroup) => {
    const mealsOutDiet = mealGroup.meals.reduce((acc, meal) => {
      if (!meal.isInDiet) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return acc + mealsOutDiet;
  }, 0);

  const percentageInDiet = (100 - (numberOfMealsOutDiet / numberOfMeals) * 100).toFixed(2).toString();

  const bestSequenceInDiet = mealGroup.reduce((acc, mealGroup) => {
    const sequenceInDiet = mealGroup.meals.reduce((acc, meal) => {
      if (meal.isInDiet) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (sequenceInDiet > acc) {
      return sequenceInDiet;
    }

    return acc;
  }, 0);

  return {
    numberOfMeals,
    numberOfMealsOutDiet,
    percentageInDiet: percentageInDiet === "NaN" ? "0" : percentageInDiet,
    bestSequenceInDiet,
  };
}
