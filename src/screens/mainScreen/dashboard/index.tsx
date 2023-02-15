import React, { useEffect, useState } from "react";
import { FlatList, Platform, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Box from "../../../components/common/Box";
import DashboardTile from "../../../components/DashboardTile";
import MainHeader from "../../../components/MainHeader";
import { fetchById, signOutUser } from "../../../network/firebaseServices";
import { useGetUser } from "../../../network/hooks/useGetUser";
import { setUser } from "../../../redux/slices/UserSlice";
import { DashboardData, SCREENS } from "../../../utils/Constants";

interface props {
  navigation: any;
}

const Dashboard = ({ navigation }: props) => {
  const { user } = useSelector((state: any) => state.reducer.user);
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();
  const { isLoading, refetch, data } = useGetUser(user?.uid);

  useEffect(() => {
    if (data) {
      setUserInfo(data);
      console.log("data: ", data);
    }
  }, [data]);

  const navigateToScreen = (screenName: string) => {
    if (screenName === "MealPlan") {
      navigation.navigate(SCREENS.MealPlan);
    }
    if (screenName === "Settings") {
      signOutUser();
      dispatch(setUser(null));
    }
    if (screenName === "Inventory") {
      navigation.navigate(SCREENS.InventoryDashboard);
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <MainHeader navigation={navigation} headerLable={userInfo?.name} />
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
