import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import Input from "./Input";

const FormField = ({
  ref,
  name,
  placeHolder,
  keyboardType = "default",
  multiline = false,
  maxLength = 80,
  backgroundColor,
  label,
  variant,
  flex = 1,
  ctaText,
  ctaIcon,
  onCtaPress,
  borderRadius,
  height = 70,
  width,
  isInvalid,
  restrictLabelColorChange = false,
  placeholderTextColor,
  onChangeText,
  ...props
}) => {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext<any>() ?? {};

  return (
    <Input
      label={label}
      keyboardType={keyboardType}
      ref={ref}
      placeholder={placeHolder}
      value={String(values[name]) === "null" ? "" : String(values[name])}
      returnKeyType="done"
      backgroundColor={backgroundColor ? backgroundColor : "black"}
      color={"white"}
      borderColor={"grey2"}
      borderWidth={1}
      height={height}
      width={width}
      isInvalid={isInvalid}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : "grey4"
      }
      onChangeText={handleChange(name)}
      variant={variant}
      ctaText={ctaText}
      borderRadius={borderRadius}
      onCtaPress={onCtaPress}
      ctaIcon={ctaIcon}
      {...props}
    />
  );
};

FormField.defaultProps = {
  name: "",
  placeHolder: "",
  blurOnSubmit: false,
  isReplace: false,
  editable: true,
  keyboardType: "default",
  search: false,
};

const styles = StyleSheet.create({});

export { FormField };
