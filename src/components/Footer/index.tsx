import { Box, Divider, Typography } from "@mui/material";
import Form from "./Form";

export default function Footer() {
  return (
    <Box py={4}>
      <Typography variant="h5" color={"#333"} pb={1}>
        Dados do cliente
      </Typography>
      <Divider />
      <Form />
    </Box>
  );
}
