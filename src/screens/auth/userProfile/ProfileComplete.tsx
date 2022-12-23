import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ProfileCompletion from "../../../components/ProfileCompletion";

const ProfileComplete = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ProfileCompletion navigation={navigation} />
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

export default ProfileComplete;
