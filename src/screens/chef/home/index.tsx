import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import MainHeader from "../../../components/MainHeader";

const Home = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [products, setProducts] = useState([]);

  return (
    <SafeAreaView style={styles.mainView}>
      <MainHeader headerLable={"CHEF SCREEN"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: "#F9F9F9", justifyContent: "center" },
  separatorHeight: {
    height: 8,
  },
});

export default Home;
