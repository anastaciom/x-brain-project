import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Error404 from "../assets/images/error404.png";
export default function Error404Page() {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent="center"
      flexDirection={"column"}
      color="#333"
      bgcolor={"#fff"}
    >
      <img src={Error404} alt="Erro 404" width={"50%"} />
      <Typography
        fontWeight={"400"}
        fontSize={20}
        width={"80%"}
        textAlign="center"
      >
        Página não encontrada.{" "}
        <Link style={{ color: "#49b9ff", fontWeight: "bold" }} to="/">
          Voltar para página de produtos
        </Link>{" "}
      </Typography>
    </Box>
  );
}
