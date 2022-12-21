import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../assets/svg";
import { SCREENS } from "../utils/Constants";
import Box from "./common/Box";
import CTA from "./common/CTA";
import CTAWithDynamicIcon from "./common/CTAWithDynamicIcon";
import RadioButtonRN from "radio-buttons-react-native";
import Input from "./common/Input";
import Text from "./common/Text";

interface InputTextProps {
  navigation?: any;
}

interface textInterface {
  name?: string;
  title?: string;
}

const maleData = [
  {
    label: "Male",
  },
  {
    label: "Female",
  },
];

const ProfileCreation: React.FC<InputTextProps> = (props) => {
  const { navigation } = props;
  const [age, setAge] = useState("");

  const TextTile = ({ name, title }: textInterface) => {
    return (
      <Box flex={1}>
        <Text
          lineHeight={23}
          numberOfLines={2}
          fontSize={20}
          color={"white"}
          fontWeight={"400"}
          paddingVertical={"5"}
        >
          {title}
        </Text>
        <Text
          lineHeight={46}
          numberOfLines={2}
          fontSize={40}
          color={"white"}
          fontWeight={"400"}
        >
          {name}
        </Text>
      </Box>
    );
  };

  const InputValue = ({ name, title }: textInterface) => {
    return (
      <Box flex={1}>
        <Text
          lineHeight={23}
          numberOfLines={2}
          fontSize={20}
          color={"white"}
          fontWeight={"400"}
          paddingVertical={"5"}
        >
          {title}
        </Text>
        <Input
          keyboardType={"numeric"}
          placeholder={"How old are you?"}
          value={age}
          returnKeyType="next"
          backgroundColor={"black"}
          color={"white"}
          borderColor={"grey2"}
          borderWidth={0}
          height={70}
          width={400}
          placeholderTextColor={"#C8C8C8"}
          onChangeText={(val) => {
            console.log("val", val);
            setAge(val);
          }}
        />
      </Box>
    );
  };

  return (
    <Box marginTop={"20"} paddingHorizontal={"20"} flex={1}>
      <Box flex={0.2}>
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
          lineHeight={80.49}
          numberOfLines={2}
          fontSize={60}
          color={"white"}
          fontWeight={"400"}
          paddingHorizontal={"20"}
          marginTop={"10"}
        >
          Let’s create your profile
        </Text>
      </Box>
      <Box flex={0.75} paddingHorizontal={"20"}>
        <Box flexDirection={"row"} justifyContent={"flex-start"}>
          <TextTile name={"Kevin"} title={"First name"} />
          <TextTile name={"Claudio"} title={"Last name"} />
        </Box>
        <Box flex={1} marginTop={"24"}>
          <InputValue name={"Kevin"} title={"Age"} />
        </Box>
        <Box flex={1} flexDirection={"row"}>
          <Box flex={1}>
            <RadioButtonRN
              circleSize={40}
              activeColor={"#FFFFFF"}
              deactiveColor={"#C8C8C8"}
              box={false}
              data={maleData}
              style={{
                width: "50%",
                flexDirection: "row",
              }}
              boxStyle={{
                width: "100%",
              }}
              textStyle={{
                fontFamily: "Helvetica",
                fontWeight: "400",
                color: "#ffffff",
                fontSize: 40,
                lineHeight: 46,
                marginLeft: 20,
              }}
              selectedBtn={(e) => console.log(e)}
            />
          </Box>
        </Box>
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
          Your age and sex is used to help with nutritional and health related
          insights.
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
        onPress={() => navigation.navigate(SCREENS.UserProfileFlow)}
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

export default ProfileCreation;
