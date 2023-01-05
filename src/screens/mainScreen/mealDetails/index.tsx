import React from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { boldCrossIcon } from "../../../assets/svg";
import AvatarIcon1 from "../../../assets/svg/AvatarIcon1.svg";
import AvatarIcon2 from "../../../assets/svg/AvatarIcon2.svg";
import MealIcon2 from "../../../assets/svg/mealIcon4.svg";
import Box from "../../../components/common/Box";
import Text from "../../../components/common/Text";

interface props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MealDetails = ({ navigation }: props) => {
  const CrossButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Box
          height={32}
          width={32}
          backgroundColor={"white"}
          borderRadius={"35"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SvgXml height={16} width={16} xml={boldCrossIcon} />
        </Box>
      </TouchableOpacity>
    );
  };

  const BarView = () => {
    return <Box backgroundColor={"grey6"} height={104}></Box>;
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar translucent backgroundColor="transparent" />
      <Box flex={0.3} alignItems={"center"} justifyContent={"center"}>
        <MealIcon2 height={windowHeight} />
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
        <Box
          position={"absolute"}
          top={Platform.OS === "android" ? 30 : 10}
          right={35}
        >
          <CrossButton />
        </Box>
        <Box position={"absolute"}>
          <BarView />
        </Box>
      </Box>
      <Box flex={0.7}>
        <Box></Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#171717",
  },
});

export default MealDetails;
