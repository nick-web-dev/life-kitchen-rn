import { useTheme } from "@shopify/restyle";
import React from "react";
import { TouchableHighlight } from "react-native";
import { Theme } from "../../theme/theme";
import Text from "./Text";

const CTAText = ({ color, fontWeight, label, onPress, ...rest }: any) => {
  const { colors } = useTheme<Theme>();

  return (
    <TouchableHighlight onPress={onPress}>
      <Text
        {...rest}
        lineHeight={23}
        numberOfLines={1}
        fontSize={20}
        color={color}
        fontWeight={fontWeight ? fontWeight : "700"}
      >
        {label}
      </Text>
    </TouchableHighlight>
  );
};

export default CTAText;
