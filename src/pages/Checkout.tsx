import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PurchaseImage from "../assets/images/purchase.png";
import { RootState } from "../redux/store";
import { formatThePrice } from "../utils/formatThePrice";

export default function CheckoutPage() {
  const { total } = useSelector((state: RootState) => state.cart);
  const { data } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent="center"
      color="#333"
      bgcolor={{
        xs: "#fff",
        sm: "#f1f1f1",
        md: "#f1f1f1",
        lg: "#f1f1f1",
        xl: "#f1f1f1",
      }}
    >
      <Box
        width={{
          xs: "100%",
          sm: "300px",
          md: "300px",
          lg: "300px",
          xl: "300px",
        }}
        borderRadius={"5px"}
        height={"400px"}
        bgcolor={"#fff"}
      >
        <Box
          width={"100%"}
          height={"30%"}
          alignItems={"center"}
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          <Typography
            fontWeight={"bold"}
            fontSize="20px"
            maxWidth={"90%"}
            textOverflow="ellipsis"
            whiteSpace={"nowrap"}
            overflow="hidden"
          >
            {data.name},
          </Typography>
          <Typography fontWeight={"500"}>
            Sua compra no valor de{" "}
            <span style={{ color: "#49b9ff" }}>{formatThePrice(total)}</span>
          </Typography>
          <Typography fontWeight={"500"}>foi finalizada com sucesso</Typography>
        </Box>
        <Box
          width={"100%"}
          height={"40%"}
          alignItems={"center"}
          justifyContent="center"
          display="flex"
        >
          <img
            src={PurchaseImage}
            alt="icone checkout"
            width={"160px"}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          width={"100%"}
          height={"30%"}
          alignItems={"center"}
          justifyContent="center"
          display="flex"
        >
          <Button
            sx={{ background: "orange" }}
            variant="contained"
            type="submit"
            onClick={() => window.location.reload()}
          >
            Iniciar nova compra
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
