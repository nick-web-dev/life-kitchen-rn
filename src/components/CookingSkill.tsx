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

const limit = 1;

const CookingSkill: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;
  const [totalSelected, setTotalSelected] = useState(0);
  const { userProfile } = useSelector((state) => state?.reducer);
  const [profileData, setProfileData] = useState(userProfile.userProfile);
  const [cookingProfile, setCookingProfile] = useState(
    userProfile.userProfile[0]?.cookingSkill
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (userProfile.userProfile) {
      setProfileData(userProfile.userProfile);
      setCookingProfile(userProfile.userProfile[0]?.cookingSkill);
    }
  }, [userProfile]);

  const checkValueChanges = (item) => {
    let newArray = cookingProfile.map((element) => {
      if (item?.id === element?.id) {
        if (!element?.checkBox === true) setTotalSelected(1);
        else setTotalSelected(0);
        return {
          ...element,
          checkBox: !element?.checkBox,
        };
      } else {
        return {
          ...element,
          checkBox: false,
        };
      }
    });
    let newProfile = profileData.map((item) => {
      if (item.screenNumber === 1) {
        return {
          ...item,
          cookingSkill: newArray,
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
      if (item.screenNumber === 1) {
        return {
          ...item,
          displayScreen: false,
        };
      } else if (item.screenNumber === 2) {
        return {
          ...item,
          displayScreen: true,
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
            onPress={() => navigation.goBack()}
          />
          <Text
            lineHeight={34.5}
            numberOfLines={2}
            fontSize={30}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            1 of 5
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
          What is your cooking skill level?
        </Text>
        <Text
          lineHeight={23}
          numberOfLines={2}
          fontSize={22}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          This helps me recommend the right recipes to match your skill level
        </Text>
      </Box>
      <Box flex={1} padding={"10"} paddingTop={"30"}>
        <FlatList
          data={cookingProfile}
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

export default CookingSkill;
