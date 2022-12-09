import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  FlatList,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useGetProducts } from "../../network/hooks/useGetProducts";
import { ListSeparatorComponent } from "../../components/ListSeparatorComponent";
import ListItems from "../../components/ListItems";
import MainHeader from "../../components/MainHeader";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [products, setProducts] = useState([]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MainHeader headerLable={"MAINSCREEN"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: "#F9F9F9", justifyContent: "center" },
  separatorHeight: {
    height: 8,
  },
});

export default App;
