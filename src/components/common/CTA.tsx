import {
  createRestyleComponent,
  createVariant,
  useTheme,
} from "@shopify/restyle";
import React, { forwardRef, ReactNode } from "react";

import { Theme } from "../../theme/theme";
import { allRestyleFunctions } from "../../theme/contants";
import { RestyleProps } from "../../utils/types";

import Box from "./Box";
import Button, { ButtonProps } from "./Button";
import Text, { FontWeight } from "./Text";

type ColorFromButtonVariantMap = Record<
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "disabled"
  | "ghost"
  | "destructive",
  keyof Theme["colors"]
>;

const colorFromButtonVariantMap: ColorFromButtonVariantMap = {
  primary: "brandGreen",
  secondary: "secondary",
  tertiary: "white",
  outline: "black",
  disabled: "secondary",
  ghost: "secondary",
  destructive: "white",
};

type IconState =
  | { withIcon: true; onlyIcon?: never }
  | { withIcon?: never; onlyIcon: true }
  | { withIcon?: false; onlyIcon?: false };
type CTAProps = RestyleProps<"buttonVariants"> &
  ButtonProps &
  IconState & { weight?: FontWeight };

const RestyleCTA = createRestyleComponent<CTAProps, Theme>(
  [...allRestyleFunctions, createVariant({ themeKey: "buttonVariants" })],
  Button
);

const CTA: React.FC<CTAProps> = forwardRef(function CTA(
  { children, color, weight, ...rest },
  ref
) {
  const { colors } = useTheme<Theme>();

  const variant = (
    rest.disabled ? "disabled" : rest.variant ?? "primary"
  ) as keyof ColorFromButtonVariantMap;
  const arrowColor = colors[colorFromButtonVariantMap[variant]];
  const showIcon = rest.withIcon || rest.onlyIcon;

  return (
    <RestyleCTA
      {...(variant === "ghost"
        ? {}
        : {
            height: 50,
            paddingHorizontal: "20",
          })}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      backgroundColor="brandGreen"
      onPress={rest.onPress}
      variant={variant}
      style={rest.style ?? {}}
      ref={ref}
      {...rest}
    >
      {rest.onlyIcon ? null : (
        <Box>
          <Text
            color={
              color ??
              (colorFromButtonVariantMap[variant] as keyof Theme["colors"])
            }
            weight={weight ?? "regular"}
          >
            {children as ReactNode}
          </Text>
        </Box>
      )}
      {showIcon ? (
        <Box alignItems="center" {...(rest.onlyIcon ? {} : { ml: "10" })}></Box>
      ) : null}
    </RestyleCTA>
  );
});

export default CTA;
