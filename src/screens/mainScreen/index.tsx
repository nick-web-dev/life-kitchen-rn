import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MainHeader from "../../components/MainHeader";

const App = () => {
  return (
    <SafeAreaView style={styles.mainView}>
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
