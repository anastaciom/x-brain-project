import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box py={8}>
      <Typography variant="h5" color={"#333"} pb={1}>
        Dados do cliente
      </Typography>
      <Divider />
    </Box>
  );
}
