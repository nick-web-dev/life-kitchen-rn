import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Appearance } from "react-native";
import LoginScreen1 from "../screens/auth/loginScreen1";
import LoginScreen2 from "../screens/auth/loginScreen2";
import Register from "../screens/auth/register";
import ResetPassword from "../screens/auth/resetPassword";
import EmailSent from "../screens/auth/resetPassword/emailRecovery";
import EmailSuccess from "../screens/auth/resetPassword/emailSuccess";
import NewPassword from "../screens/auth/resetPassword/newPassword";
import UserProfile from "../screens/auth/userProfile";
import FamilySizeScreen from "../screens/auth/userProfile/FamilySizeScreen";
import ProfileComplete from "../screens/auth/userProfile/ProfileComplete";
import ProfileCreationScreen from "../screens/auth/userProfile/ProfileCreationScreen";
import UserProfileFLow from "../screens/auth/userProfile/userProfileFlow";
import { SCREENS } from "../utils/Constants";

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
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default UnAuthenticatedStack;
