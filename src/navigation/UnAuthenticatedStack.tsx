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
        <AuthStack.Screen name={SCREENS.UserProfile} component={UserProfile} />
        <AuthStack.Screen
          name={SCREENS.UserProfileFlow}
          component={UserProfileFLow}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default UnAuthenticatedStack;
