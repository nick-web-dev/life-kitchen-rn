import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../assets/svg";
import { SCREENS } from "../utils/Constants";
import Box from "./common/Box";
import CTA from "./common/CTA";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import Text from "./common/Text";
import SliderComponent from "./Slider";

interface InputTextProps {
  navigation?: any;
}

const FamilySize: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;
  const [sliderValue, setSliderValue] = useState(1);

  const onSliderValueChange = (value) => {
    console.log("value: ", value);
    setSliderValue(Math.ceil(value));
  };

  return (
    <Box marginTop={"20"} paddingHorizontal={"20"} flex={1}>
      <Box flex={0.2}>
        <CTAWithDynamicIcon
          marginTop={"20"}
          marginBottom={"10"}
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
          lineHeight={27.6}
          numberOfLines={2}
          fontSize={24}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
          marginTop={"30"}
        >
          First, let’s get to know you or your family’s needs
        </Text>
        <Text
          lineHeight={80.49}
          numberOfLines={2}
          fontSize={60}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
          marginTop={"10"}
        >
          How big is your family?
        </Text>
      </Box>
      <Box flex={0.75} paddingHorizontal={"20"} justifyContent={"center"}>
        <Text
          lineHeight={149.49}
          numberOfLines={2}
          fontSize={130}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
          alignSelf={"center"}
        >
          {sliderValue}
        </Text>
        <Text
          lineHeight={34.5}
          numberOfLines={2}
          fontSize={30}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
          alignSelf={"center"}
          marginBottom={"30"}
        >
          Family Members
        </Text>
        <SliderComponent
          value={sliderValue}
          onValueChange={onSliderValueChange}
          minimumLimit={1}
          maximumLimit={20}
        />
      </Box>
      <Box marginBottom={"30"}>
        <Text
          lineHeight={27.6}
          numberOfLines={2}
          fontSize={24}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
        >
          You can set up profiles for each family member to create a truly
          personalised experienced for each family member.
        </Text>
      </Box>
      <CTA
        height={70}
        borderRadius={"8"}
        fontWeight={"400"}
        fontSize={20}
        variant="primary"
        color={"white"}
        lineHeight={23}
        onPress={() => navigation.navigate(SCREENS.ProfileCreation)}
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
});

export default FamilySize;
