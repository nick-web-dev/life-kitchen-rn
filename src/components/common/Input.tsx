import {
  createRestyleComponent,
  createVariant,
  useTheme,
} from "@shopify/restyle";
import React, { forwardRef, useState } from "react";
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from "react-native";

import { Theme } from "../../theme/theme";
import { allRestyleFunctions } from "../../theme/contants";
import { RestyleProps } from "../../utils/types";

import Box from "./Box";
import Button from "./Button";
import { useInputVariant } from "./hooks";
import type { InputVariants } from "./hooks/types";
import Text from "./Text";

type RestyleInputProps = RestyleProps<"inputVariants">;

type CTAInInputProps =
  | { ctaText?: undefined; onCtaPress?: never; ctaIcon?: undefined }
  | ({ onCtaPress: (event: GestureResponderEvent) => void } & (
      | { ctaText: string; ctaIcon?: never }
      | { ctaText?: never; ctaIcon: React.ReactNode }
    ));

export type InputProps = RestyleInputProps &
  RNTextInputProps & {
    helperText?: () => React.ReactNode;
    helperTextContainerStyle?: StyleProp<TextStyle> & StyleProp<ViewStyle>;
    label?: string;
    isInvalid?: boolean;
    restrictLabelColorChange?: boolean;
    placeholderTextColor?: any;
    ref?: React.Ref<RNTextInput>;
  } & CTAInInputProps;

const RestyleInput = createRestyleComponent<InputProps, Theme>(
  [...allRestyleFunctions, createVariant({ themeKey: "inputVariants" })],
  RNTextInput
);

const Input: React.FC<InputProps> = forwardRef(function Input(
  {
    helperText,
    helperTextContainerStyle,
    onFocus,
    onBlur,
    label,
    variant,
    flex = 1,
    ctaText,
    ctaIcon,
    onCtaPress,
    borderRadius,
    height,
    width,
    isInvalid,
    restrictLabelColorChange = false,
    placeholderTextColor,
    ...rest
  },
  ref
) {
  const { colors, spacing, textVariants } = useTheme<Theme>();
  const [inputActive, setInputActive] = useState(false);
  const { inputVariant, labelColor } = useInputVariant(
    (variant as InputVariants) ?? "default",
    inputActive
  );

  const isDisabled = variant === "disabled";
  const isCtaProvided = ctaText || ctaIcon || onCtaPress;

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus && onFocus(e);
    setInputActive(true);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur && onBlur(e);
    setInputActive(false);
  };

  return (
    <>
      {/* LABEL */}
      {label ? (
        <Text
          variant="fs:15"
          {...(restrictLabelColorChange ? {} : { color: labelColor })}
          mb="10"
          weight="regular"
        >
          {label}
        </Text>
      ) : null}
      <Box flexDirection="row" alignItems="center">
        {/* input */}
        <RestyleInput
          {...rest}
          variant={inputVariant}
          ref={ref}
          paddingHorizontal="12"
          paddingVertical="5"
          textAlign={false ? "right" : "left"}
          alignItems="center"
          height={height ? height : 40}
          width={width ?? 20}
          flex={flex}
          alignSelf="stretch"
          fontSize={rest.fontSize ?? textVariants["fs:17"].fontSize}
          // lineHeight={rest.lineHeight ?? textVariants['fs:15'].lineHeight}
          fontWeight="400"
          style={rest.style ?? {}}
          placeholder={rest.placeholder ? rest.placeholder : "Hint"}
          borderRadius={borderRadius ?? "10"}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : colors.black
          }
          value={rest.value}
          onChangeText={rest.onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!isDisabled}
          selectTextOnFocus={!isDisabled}
          contextMenuHidden={isDisabled} // the menu that has the cut, copy, paste options
          {...(isCtaProvided ? { paddingRight: "80" } : {})}
          underlineColorAndroid="transparent"
        />

        {/* CTA AND ICON */}
        {isCtaProvided || isInvalid ? (
          <Box
            position="absolute"
            right={spacing["16"]}
            flexDirection="row"
            alignItems="center"
          >
            {/* CTA */}
            {isCtaProvided ? (
              <Button onPress={onCtaPress}>
                {ctaIcon ? (
                  ctaIcon
                ) : (
                  <Text color="brandGreen" variant="fs:15" weight="regular">
                    {ctaText}
                  </Text>
                )}
              </Button>
            ) : null}
            {/* INVALID ICON */}
            {isInvalid && !inputActive ? (
              <Box ml="10">
                {/* <Icons.Invalid height={20} width={20} /> */}
              </Box>
            ) : null}
          </Box>
        ) : null}
      </Box>

      {/* HELPER TEXT */}
      {helperText ? (
        <Box marginTop="xs" style={helperTextContainerStyle}>
          {helperText()}
        </Box>
      ) : null}
    </>
  );
});

export default Input;
