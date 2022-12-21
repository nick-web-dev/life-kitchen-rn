import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CookingSkill from "../../../components/CookingSkill";
import NutritionGoals from "../../../components/NutritionGoals";

const UserProfileFLow = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <CookingSkill navigation={navigation} />
      {/* <NutritionGoals navigation={navigation} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: "#000000", justifyContent: "center" },
  Scroll: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default UserProfileFLow;
