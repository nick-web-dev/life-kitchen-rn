import moment from "moment";
import React, { useState } from "react";
import { FlatList, Platform, SafeAreaView, StyleSheet } from "react-native";
import AddNewMealTile from "../../../components/AddNewMealTile";
import Calendar from "../../../components/Calendar";
import Box from "../../../components/common/Box";
import MealDoneTile from "../../../components/MealDoneTile";
import MealHeader from "../../../components/MealHeader";
import PendingMealTile from "../../../components/PendingMealTile";

interface props {
  navigation: any;
}

const data = [
  {
    id: 1,
    tile: "breakFast",
  },
  {
    id: 2,
    tile: "lunch",
  },
  {
    id: 3,
    tile: "dinner",
  },
];

const MealPlan = ({ navigation }: props) => {
  const [currentDate, setCurrentDate] = useState(moment().format());

  const ListView = ({ item }) => {
    console.log("item: ", item);
    if (item?.tile === "breakFast") return <MealDoneTile />;
    if (item?.tile === "lunch") return <AddNewMealTile />;
    if (item?.tile === "dinner")
      return <PendingMealTile navigation={navigation} />;
  };

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
      <Box marginHorizontal={"20"} paddingVertical={"10"} flex={1}>
        <FlatList
          data={data}
          renderItem={({ item }: any) => <ListView item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingVertical={Platform.OS === "android" ? "10" : "10"} />
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#171717",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

export default MealPlan;
