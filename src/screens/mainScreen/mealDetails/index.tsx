import moment from "moment";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import AddNewMealTile from "../../../components/AddNewMealTile";
import Calendar from "../../../components/Calendar";
import Box from "../../../components/common/Box";
import MealDoneTile from "../../../components/MealDoneTile";
import MealHeader from "../../../components/MealHeader";
import PendingMealTile from "../../../components/PendingMealTile";
import MealIcon2 from "../../../assets/svg/mealIcon4.svg";
import AvatarIcon1 from "../../../assets/svg/AvatarIcon1.svg";
import AvatarIcon2 from "../../../assets/svg/AvatarIcon2.svg";
import Text from "../../../components/common/Text";

interface props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MealDetails = ({ navigation }: props) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar translucent backgroundColor="transparent" />
      <Box flex={0.3} alignItems={"center"} justifyContent={"center"}>
        <MealIcon2 width={windowWidth} height={windowHeight} />
        <Box
          position={"absolute"}
          left={25}
          top={Platform.OS === "android" ? 30 : 10}
        >
          <Box flexDirection={"row"}>
            <Box position={"absolute"} left={20}>
              <AvatarIcon1 width={34} height={34} />
            </Box>
            <Box>
              <AvatarIcon2 width={34} height={34} />
            </Box>
          </Box>
        </Box>
        <Box position={"absolute"} left={25} bottom={0}>
          <Box>
            <Text
              lineHeight={28}
              numberOfLines={1}
              fontSize={24}
              color={"white"}
              fontWeight={"400"}
              textAlign={"left"}
            >
              Dinner - Monday 20th June
            </Text>
            <Text
              lineHeight={56}
              numberOfLines={1}
              fontSize={48}
              color={"white"}
              fontWeight={"700"}
              textAlign={"left"}
            >
              Spaghetti Bolognese
            </Text>
          </Box>
        </Box>
      </Box>
      <Box flex={0.45}>
        <Box></Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#2C2C2C",
  },
});

export default MealDetails;
