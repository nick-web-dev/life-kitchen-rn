import React from "react";
import Box from "./Box";

interface Props {
  children?: any;
}

const Container = ({ children }: Props) => {
  return (
    <Box paddingHorizontal="16" flex={1}>
      {children}
    </Box>
  );
};

export default Container;
