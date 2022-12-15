import React from "react";
import { useSelector } from "react-redux";
import AuthenticatedStack from "./AuthenticatedStack";
import UnAuthenticatedStack from "./UnAuthenticatedStack";
import { ThemeProvider } from "@shopify/restyle";
import { Appearance } from "react-native";
import { theme, darkTheme } from "../theme/theme";

const Navigation = () => {
  const { user } = useSelector((state: any) => state.reducer.user);
  const colorScheme = Appearance.getColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      {false ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </ThemeProvider>
  );
};

export default Navigation;
