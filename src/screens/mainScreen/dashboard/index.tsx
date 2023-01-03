import React from "react";
import { FlatList, Platform, SafeAreaView, StyleSheet } from "react-native";
import Box from "../../../components/common/Box";
import DashboardTile from "../../../components/DashboardTile";
import MainHeader from "../../../components/MainHeader";
import { DashboardData, SCREENS } from "../../../utils/Constants";

interface props {
  navigation: any;
}

const Dashboard = ({ navigation }: props) => {
  const navigateToScreen = (screenName: string) => {
    if (screenName === "MealPlan") {
      navigation.navigate(SCREENS.MealPlan);
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <MainHeader navigation={navigation} headerLable={"Claudio Family"} />
      <Box
        paddingVertical={"30"}
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FlatList
          numColumns={2}
          data={DashboardData}
          renderItem={({ item }: any) => (
            <DashboardTile onPress={navigateToScreen} item={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingVertical={Platform.OS === "android" ? "15" : "20"} />
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    padding: 20,
  },
});

export default Dashboard;
