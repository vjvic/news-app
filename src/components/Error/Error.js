import React from "react";
import { Box, Typography } from "@material-ui/core";

const Error = ({ text }) => {
  return (
    <Box textAlign="center" my={5}>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default Error;
