import { useEffect, useState } from "react";

import type { InputVariants, LabelColors } from "./types";

function useInputVariant(variant: InputVariants, inputActive: boolean) {
  const [inputVariant, setInputVariant] = useState<InputVariants>(variant);
  const [labelColor, setLabelColor] = useState<LabelColors>("black");

  useEffect(() => {
    const variants: { inputVariants: InputVariants; labelColor: LabelColors } =
      (() => {
        if (inputActive && variant !== "disabled") {
          return {
            inputVariants: "active",
            labelColor: "brandGreen",
          };
        } else {
          switch (variant) {
            case "verify":
              return {
                inputVariants: "verify",
                labelColor: "black",
              };
            case "disabled":
              return {
                inputVariants: "disabled",
                labelColor: "black",
              };
            case "invalid":
              return {
                inputVariants: "invalid",
                labelColor: "grey2",
              };
            default: {
              return {
                inputVariants: "default",
                labelColor: "black",
              };
            }
          }
        }
      })();

    setInputVariant(variants.inputVariants);
    setLabelColor(variants.labelColor);
  }, [variant, inputActive]);

  return { inputVariant, labelColor };
}

export default useInputVariant;
