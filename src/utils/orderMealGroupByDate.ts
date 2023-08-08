import { MealGroupProps } from "@storage/storageConfig";
import { formatDate } from "./formatDate";

export const orderMealGroupsByDate = (mealGroups: MealGroupProps[]) => {
  const orderedGroups = mealGroups.sort((a, b) => {
    return Number(formatDate(b.date)) - Number(formatDate(a.date));
  });

  return orderedGroups;
};
