import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../assets/svg";
import { SCREENS } from "../utils/Constants";
import Box from "./common/Box";
import CTA from "./common/CTA";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../redux/slices/UserProfile";
import Text from "./common/Text";

interface InputTextProps {
  navigation?: any;
}

const data = [
  {
    id: 1,
    title: "Gluten-free (coeliac)",
    checkBox: false,
  },
  {
    id: 2,
    title: "Gluten-free (intolerance)",
    checkBox: false,
  },
  {
    id: 3,
    title: "Halal",
    checkBox: false,
  },
  {
    id: 4,
    title: "Kosher",
    checkBox: false,
  },
  {
    id: 5,
    title: "Dairy and lactose free",
    checkBox: false,
  },
  {
    id: 6,
    title: "Fish/shellfish allergy",
    checkBox: false,
  },
];

const limit = 1;

const DietaryRequirements: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;
  const [checkData, setCheckData] = useState(data);
  const [totalSelected, setTotalSelected] = useState(0);
  const { userProfile } = useSelector((state) => state?.reducer);
  const [profileData, setProfileData] = useState(userProfile.userProfile);
  const [dietaryData, setDietaryData] = useState(
    userProfile.userProfile[3]?.dietaryRequirements
  );
  const dispatch = useDispatch();

  const checkValueChanges = (item) => {
    let newArray = checkData.map((element) => {
      if (item?.id === element?.id) {
        if (!item?.checkBox === false) setTotalSelected(totalSelected - 1);
        if (!item?.checkBox === true && totalSelected >= checkData.length) {
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
    setCheckData(newArray);
  };

  const moveBackToComponent = () => {
    let newProfile = profileData.map((item) => {
      if (item.screenNumber === 2) {
        return {
          ...item,
          displayScreen: true,
        };
      } else if (item.screenNumber === 3) {
        return {
          ...item,
          displayScreen: false,
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
            3 of 5
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
          Do you have any dietary requirements?
        </Text>
        <Text
          lineHeight={23}
          numberOfLines={2}
          fontSize={22}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          Select all that apply. I’ll make sure to work within your needs.
        </Text>
      </Box>
      <Box flex={1} padding={"10"} paddingTop={"30"}>
        <FlatList
          data={checkData}
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
        {totalSelected} Selected
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
        onPress={() => navigation.navigate(SCREENS.LoginScreen2)}
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

export default DietaryRequirements;
