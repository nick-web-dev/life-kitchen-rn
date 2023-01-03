import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AddNewMealTile from "../../../components/AddNewMealTile";
import Calendar from "../../../components/Calendar";
import Box from "../../../components/common/Box";
import MealDoneTile from "../../../components/MealDoneTile";
import MealHeader from "../../../components/MealHeader";

interface props {
  navigation: any;
}

const MealPlan = ({ navigation }: props) => {
  const [currentDate, setCurrentDate] = useState(moment().format());

  return (
    <SafeAreaView style={styles.mainView}>
      <MealHeader
        shoppingItems={"02"}
        navigation={navigation}
        headerLable={"Claudio Family"}
      />
      <Calendar
        currentDate={currentDate}
        setCurrentDate={(date) => setCurrentDate(date)}
      />
      <Box marginHorizontal={"20"} paddingVertical={"30"} flex={1}>
        <MealDoneTile />
      </Box>
      <Box marginHorizontal={"20"} paddingVertical={"30"} flex={1}>
        <AddNewMealTile />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#2C2C2C",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

export default MealPlan;
