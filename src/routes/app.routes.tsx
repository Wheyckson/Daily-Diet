import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditMeal } from "@screens/EditMeal";
import { MealDetail } from "@screens/MealDetail/indext";
import { Meals } from "@screens/Meals";
import { MealsStatistics } from "@screens/MealsStatistics";
import { NewMeal } from "@screens/NewMeal";
import { OnTheDiet } from "@screens/OnTheDiet";
import { OutTheDiet } from "@screens/OutTheDiet";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="meals" component={Meals} />
            <Screen name="statistics" component={MealsStatistics} />
            <Screen name="newMeal" component={NewMeal} />
            <Screen name="editMeal" component={EditMeal} />
            <Screen name="onTheDiet" component={OnTheDiet} />
            <Screen name="outTheDiet" component={OutTheDiet} />
            <Screen name="mealDetail" component={MealDetail} />
        </Navigator>
    )
}