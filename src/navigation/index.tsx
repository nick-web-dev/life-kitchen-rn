import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthenticatedStack from "./AuthenticatedStack";
import UnAuthenticatedStack from "./UnAuthenticatedStack";
import { ThemeProvider } from "@shopify/restyle";
import { Appearance } from "react-native";
import { theme, darkTheme } from "../theme/theme";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/UserSlice";
import auth from "@react-native-firebase/auth";

const Navigation = () => {
  const { user: currentUser } = useSelector((state: any) => state.reducer.user);
  const { userSignIn } = useSelector((state: any) => state.reducer);
  const colorScheme = Appearance.getColorScheme();
  const dispatch = useDispatch();
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(setUser(user));
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      {currentUser && userSignIn?.signIn ? (
        <AuthenticatedStack />
      ) : (
        <UnAuthenticatedStack />
      )}
    </ThemeProvider>
  );
};

export default Navigation;
