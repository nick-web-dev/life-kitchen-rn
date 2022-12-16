import { useFormikContext } from "formik";
import React from "react";
import CTA from "./CTA";

type ComponentProps = {
  title: string;
  loading: boolean;
  disabled: boolean;
  width: string;
  buttonStyle?: any;
  color: string;
  textStyle: any;
  handleSubmit: any;
};
const FormButton: React.FC<ComponentProps> = (
  { title, loading, disabled, color, width, textStyle, buttonStyle },
  props
) => {
  const { handleSubmit } = useFormikContext();

  return (
    <CTA
      height={70}
      borderRadius={"8"}
      fontWeight={"400"}
      fontSize={20}
      variant="primary"
      color={color}
      lineHeight={23}
      onPress={handleSubmit}
      width={width}
      {...props}
      disabled={disabled}
    >
      {title}
    </CTA>
  );
};

export default FormButton;
