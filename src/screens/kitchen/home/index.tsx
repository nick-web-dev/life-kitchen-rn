import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MainHeader from "../../../components/MainHeader";

const Home = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <MainHeader headerLable={"KITCHN SCREEN"} />
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
