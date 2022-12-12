import { AllProps, VariantProps, VisibleProps } from "@shopify/restyle";
import { Theme } from "../theme/theme";

declare global {
  interface String {
    insert(index: number, string: string): string;
  }

  interface JSON {
    pretty(obj: any): string;
  }
}

export type AllRestylePropsWithoutVariantProps = AllProps<Theme> &
  VisibleProps<Theme>;

export type RestyleProps<T = void> = T extends keyof Theme
  ? AllRestylePropsWithoutVariantProps & VariantProps<Theme, T>
  : AllRestylePropsWithoutVariantProps;

export type StringLiteralFromArray<T> = T extends string[] ? T[number] : never;

export interface CustomHeaders {
  [key: string]: string;
}

export type BaseAPIResponse = {
  [key: string]: any;
};
