const MEAL_COLLECTION = "@diet:meals";

type MealGroupProps = {
  date: string;
  meals: MealProps[];
};

type MealProps = {
  id: string | number[];
  name: string;
  description: string;
  date: string;
  time: string;
  isInDiet: boolean;
};

export { MEAL_COLLECTION, MealGroupProps, MealProps };
