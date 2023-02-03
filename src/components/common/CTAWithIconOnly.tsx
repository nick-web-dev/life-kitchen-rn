import {
  createRestyleComponent,
  createVariant,
  useTheme,
} from "@shopify/restyle";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Theme } from "../../theme/theme";
import { allRestyleFunctions } from "../../theme/contants";
import { RestyleProps } from "../../utils/types";

import Box from "./Box";
import Text from "./Text";

interface ColorFromButtonVariantMap {
  primary: string;
  secondary: string;
  tertiary: string;
  outline: string;
  disabled: string;
  ghost: string;
}

const colorFromButtonVariantMap: ColorFromButtonVariantMap = {
  primary: "brandGreen",
  secondary: "secondary",
  tertiary: "white",
  outline: "black",
  disabled: "secondary",
  ghost: "secondary",
};

type IconState =
  | { withIcon: true; onlyIcon?: never; icon: any; marginLeftFromText?: any }
  | { withIcon?: never; onlyIcon: true; icon: any; marginLeftFromText?: any }
  | { withIcon?: false; onlyIcon?: false; icon: any; marginLeftFromText: any };
type CTAProps = RestyleProps<"buttonVariants"> &
  TouchableOpacityProps &
  IconState;

const RestyleCTA = createRestyleComponent<CTAProps, Theme>(
  [...allRestyleFunctions, createVariant({ themeKey: "buttonVariants" })],
  TouchableOpacity
);

const CTAWithIconOnly: React.FC<CTAProps> = ({ children, ...rest }) => {
  const { colors } = useTheme<Theme>();

  const variant = (rest.variant ??
    "primary") as keyof ColorFromButtonVariantMap;
  const arrowColor = colors[colorFromButtonVariantMap[variant]];
  const showIcon = rest.withIcon || rest.onlyIcon;
  const CustomIcon = rest.icon;

  return (
    <RestyleCTA
      height={50}
      alignItems="center"
      justifyContent="center"
      backgroundColor="brandGreen"
      alignContent={"center"}
      onPress={rest.onPress}
      variant={variant}
      style={rest.style ?? {}}
      {...rest}
    >
      {rest.onlyIcon ? null : (
        <Box>
          <Text
            color={colorFromButtonVariantMap[variant] as keyof Theme["colors"]}
          >
            {children}
          </Text>
        </Box>
      )}
      {showIcon ? (
        <Box
          alignItems="center"
          justifyContent={"center"}
          alignSelf={"center"}
          {...(rest.onlyIcon
            ? {}
            : { ml: rest.marginLeftFromText ? rest.marginLeftFromText : "25" })}
        >
          <CustomIcon
            width={20}
            height={20}
            color={arrowColor}
            stroke={arrowColor}
            strokeWidth={0.25}
            style={{ transform: [{ scaleX: false ? -1 : 1 }] }}
          />
        </Box>
      ) : null}
    </RestyleCTA>
  );
};

export default CTAWithIconOnly;
