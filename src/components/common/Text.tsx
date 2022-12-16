import { createRestyleComponent, createVariant } from "@shopify/restyle";
import React, { forwardRef, useMemo } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

import { Theme } from "../../theme/theme";
import { allRestyleFunctions } from "../../theme/contants";
import { RestyleProps } from "../../theme/types";

export type FontWeight = "regular" | "medium" | "bold" | "light" | "book";

export type TextProps = RestyleProps<"textVariants"> &
  RNTextProps & {
    weight?: FontWeight;
    ref?: React.Ref<RNText>;
  };

const RestyleText = createRestyleComponent<TextProps, Theme>(
  [...allRestyleFunctions, createVariant({ themeKey: "textVariants" })],
  RNText
);

const Text: React.FC<TextProps> = forwardRef(function Text(
  { children, weight, ...rest },
  ref
) {
  const fontFamily = useMemo(() => {
    switch (weight) {
      case "regular":
        return "Helvetica";
      case "bold":
        return "Helvetica-Bold";
      case "light":
        return "Helvetica-Light";
      case "medium":
        return "Helvetica";
      default:
        return "Helvetica";
    }
  }, [weight]);

  return (
    <RestyleText
      ref={ref}
      {...rest}
      variant={rest.variant ?? "body"}
      color={rest.color ?? "black"}
      fontFamily={fontFamily}
      fontWeight={rest.fontWeight ?? "700"}
      style={rest.style ?? {}}
      selectable
    >
      {children}
    </RestyleText>
  );
});

export default Text;
