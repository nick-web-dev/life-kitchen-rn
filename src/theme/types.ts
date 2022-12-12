import { AllProps, VariantProps, VisibleProps } from "@shopify/restyle";

import { Theme } from "../theme/theme";

export type AllRestylePropsWithoutVariantProps = AllProps<Theme> &
  VisibleProps<Theme>;

export type RestyleProps<T = void> = T extends keyof Theme
  ? AllRestylePropsWithoutVariantProps & VariantProps<Theme, T>
  : AllRestylePropsWithoutVariantProps;
