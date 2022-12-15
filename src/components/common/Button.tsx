import { createRestyleComponent } from "@shopify/restyle";
import React, { forwardRef, RefObject } from "react";
import { Pressable, PressableProps } from "react-native";
import { Theme } from "../../theme/theme";
import { allRestyleFunctions } from "../../theme/contants";
import { RestyleProps } from "../../utils/types";

export type ButtonProps = RestyleProps & PressableProps;
const RestyleButton = createRestyleComponent<ButtonProps, Theme>(
  allRestyleFunctions,
  Pressable
);

const Button = forwardRef<RefObject<typeof Pressable>, ButtonProps>(
  function Button({ children, ...rest }, ref) {
    return (
      <RestyleButton
        ref={ref}
        pressRetentionOffset={{ bottom: 30, left: 30, right: 30, top: 30 }}
        {...rest}
      >
        {children}
      </RestyleButton>
    );
  }
);

export default Button;
