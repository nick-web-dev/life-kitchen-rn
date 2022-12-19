import React from "react";
import { StyleSheet } from "react-native";
import Box from "./common/Box";
import Text from "./common/Text";
import CustomAvatar from "./customAvatar";

interface Props {
  icon: any;
  label: string;
}

const WelcomeTile = ({ label, icon }: Props) => {
  return (
    <Box flexDirection={"row"}>
      <Box>
        <Box
          padding={"8"}
          borderWidth={3}
          borderRadius={"73"}
          borderColor={"grey3"}
        >
          <CustomAvatar icon={icon} />
        </Box>
      </Box>
      <Text
        lineHeight={27.6}
        numberOfLines={1}
        fontSize={24}
        color={"white"}
        fontWeight={"400"}
        paddingHorizontal={"20"}
        marginVertical={"10"}
        alignSelf={"center"}
      >
        {label}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default WelcomeTile;
