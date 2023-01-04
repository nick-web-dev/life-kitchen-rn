import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Appearance } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../utils/Constants";
import LoginScreen1 from "../screens/auth/loginScreen1";
import LoginScreen2 from "../screens/auth/loginScreen2";
import Register from "../screens/auth/register";
import UserProfile from "../screens/auth/userProfile";
import UserProfileFLow from "../screens/auth/userProfile/userProfileFlow";
import ProfileCreationScreen from "../screens/auth/userProfile/ProfileCreationScreen";
import FamilySizeScreen from "../screens/auth/userProfile/FamilySizeScreen";
import ProfileComplete from "../screens/auth/userProfile/ProfileComplete";
import ResetPassword from "../screens/auth/resetPassword";
import EmailSent from "../screens/auth/resetPassword/emailRecovery";
import NewPassword from "../screens/auth/resetPassword/newPassword";
import EmailSuccess from "../screens/auth/resetPassword/emailSuccess";
import Dashboard from "../screens/mainScreen/dashboard";
import MealPlan from "../screens/mainScreen/mealPlan";
import MealDetails from "../screens/mainScreen/mealDetails";

const AuthStack = createNativeStackNavigator();

const UnAuthenticatedStack = () => {
  const colorScheme = Appearance.getColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen
          name={SCREENS.LoginScreen1}
          component={LoginScreen1}
        />
        <AuthStack.Screen
          name={SCREENS.LoginScreen2}
          component={LoginScreen2}
        />
        <AuthStack.Screen name={SCREENS.RegisterScreen} component={Register} />
        <AuthStack.Screen
          name={SCREENS.ProfileCreation}
          component={ProfileCreationScreen}
        />
        <AuthStack.Screen
          name={SCREENS.FamilySize}
          component={FamilySizeScreen}
        />
        <AuthStack.Screen name={SCREENS.UserProfile} component={UserProfile} />
        <AuthStack.Screen
          name={SCREENS.UserProfileFlow}
          component={UserProfileFLow}
        />
        <AuthStack.Screen
          name={SCREENS.ProfileComplete}
          component={ProfileComplete}
        />
        <AuthStack.Screen
          name={SCREENS.ResetScreen1}
          component={ResetPassword}
        />
        <AuthStack.Screen name={SCREENS.ResetScreen2} component={EmailSent} />
        <AuthStack.Screen name={SCREENS.ResetScreen3} component={NewPassword} />
        <AuthStack.Screen
          name={SCREENS.ResetScreen4}
          component={EmailSuccess}
        />
        <AuthStack.Screen name={SCREENS.Dashboard} component={Dashboard} />
        <AuthStack.Screen name={SCREENS.MealPlan} component={MealPlan} />
        <AuthStack.Screen name={SCREENS.MealDetails} component={MealDetails} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default UnAuthenticatedStack;
