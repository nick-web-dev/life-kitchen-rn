import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../utils/Constants";
import MainScreen from "../screens/kitchen/home";
import { Appearance } from "react-native";
import Dashboard from "../screens/mainScreen/dashboard";
import MealPlan from "../screens/mainScreen/mealPlan";
import MealDetails from "../screens/mainScreen/mealDetails";

const AuthStack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={SCREENS.Dashboard} component={Dashboard} />
        <AuthStack.Screen name={SCREENS.MealPlan} component={MealPlan} />
        <AuthStack.Screen name={SCREENS.MealDetails} component={MealDetails} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedStack;
