import React, { useState, useEffect } from "react";
import { FlatList, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../assets/svg";
import Box from "./common/Box";
import CTA from "./common/CTA";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../redux/slices/UserProfile";
import Text from "./common/Text";

interface InputTextProps {
  navigation?: any;
}

const limit = 3;

const NutritionGoals: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;
  const { userProfile } = useSelector((state) => state?.reducer);
  const [profileData, setProfileData] = useState(userProfile.userProfile);
  const [nutritionData, setNutritionData] = useState(
    userProfile.userProfile[1]?.nutritionGoal
  );
  const dispatch = useDispatch();

  const checkTotalCount = () => {
    let count = 0;
    nutritionData.forEach((element) => {
      if (element?.checkBox) count++;
    });
    return count;
  };

  const [totalSelected, setTotalSelected] = useState(checkTotalCount());

  useEffect(() => {
    if (userProfile.userProfile) {
      setProfileData(userProfile.userProfile);
      setNutritionData(userProfile.userProfile[1]?.nutritionGoal);
      setTotalSelected(checkTotalCount());
    }
  }, [userProfile]);

  const checkValueChanges = (item) => {
    let newArray = nutritionData.map((element) => {
      if (item?.id === element?.id) {
        if (!item?.checkBox === false && totalSelected > 0)
          setTotalSelected(totalSelected - 1);
        if (!item?.checkBox === true && totalSelected >= limit) {
          return item;
        } else {
          if (!item?.checkBox === true) setTotalSelected(totalSelected + 1);
          return {
            ...element,
            checkBox: !item?.checkBox,
          };
        }
      } else {
        return element;
      }
    });
    let newProfile = profileData.map((item) => {
      if (item.screenNumber === 2) {
        return {
          ...item,
          nutritionGoal: newArray,
        };
      } else return item;
    });
    dispatch(setUserProfile(newProfile));
  };

  const CheckTile = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          checkValueChanges(item);
        }}
        style={styles.btnStyle}
      >
        <Text
          lineHeight={34.5}
          numberOfLines={2}
          fontSize={30}
          color={item?.checkBox ? "brandGreen" : "white"}
          fontWeight={"400"}
        >
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const moveToNextComponent = () => {
    let newProfile = profileData.map((item) => {
      if (item.screenNumber === 2) {
        return {
          ...item,
          displayScreen: false,
        };
      } else if (item.screenNumber === 3) {
        return {
          ...item,
          displayScreen: true,
        };
      } else return item;
    });

    dispatch(setUserProfile(newProfile));
  };

  const moveBackToComponent = () => {
    let newProfile = profileData.map((item) => {
      if (item.screenNumber === 1) {
        return {
          ...item,
          displayScreen: true,
        };
      } else if (item.screenNumber === 2) {
        return {
          ...item,
          displayScreen: false,
        };
      } else return item;
    });

    dispatch(setUserProfile(newProfile));
  };

  return (
    <Box marginTop={"20"} paddingHorizontal={"20"} flex={1}>
      <Box>
        <Box
          flexDirection={"row"}
          marginVertical={"20"}
          justifyContent={"space-between"}
        >
          <CTAWithDynamicIcon
            borderRadius={"cta"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"white"}
            variant="outline"
            width={50}
            height={50}
            withIcon
            onlyIcon
            icon={() => <SvgXml height={17} width={17} xml={backArrow} />}
            onPress={() => moveBackToComponent()}
          />
          <Text
            lineHeight={34.5}
            numberOfLines={2}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            2 of 5
          </Text>
          <Box width={50} />
        </Box>
        <Text
          lineHeight={80.49}
          numberOfLines={2}
          fontSize={60}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          What nutritional related goals do you have?
        </Text>
        <Text
          lineHeight={23}
          numberOfLines={2}
          fontSize={22}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          You can select up to 3. I’ll tailor your meal plans to help match with
          your goals.
        </Text>
      </Box>
      <Box flex={1} padding={"10"} paddingTop={"30"}>
        <FlatList
          data={nutritionData}
          renderItem={({ item }: any) => <CheckTile item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={({ item }: any) => (
            <Box paddingVertical={Platform.OS === "android" ? "10" : "20"} />
          )}
        />
      </Box>
      <Text
        lineHeight={23}
        numberOfLines={2}
        fontSize={24}
        color={"white"}
        fontWeight={"400"}
        paddingHorizontal={"20"}
        marginBottom={"10"}
      >
        {totalSelected} of {limit} Selected
      </Text>
      <CTA
        marginHorizontal={"20"}
        height={70}
        borderRadius={"8"}
        fontWeight={"400"}
        fontSize={20}
        variant="primary"
        color={"white"}
        lineHeight={23}
        marginBottom={"20"}
        onPress={() => moveToNextComponent()}
      >
        Next
      </CTA>
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    fontSize: 14,
    fontWeight: "700",
  },
  btnStyle: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
});

export default NutritionGoals;
