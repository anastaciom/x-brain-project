import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IData } from "../../data/types";
import { formatThePrice } from "../../utils/formatThePrice";
import RemoveIcon from "../../assets/icons/baseline-remove-24px.svg";
import AddIcon from "../../assets/icons/baseline-add-24px.svg";
interface ProductCardProps {
  product: IData;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showProductDetails, setShowProductDetails] = useState(false);
  return (
    <Grid item xs={12} sm={4} md={3} lg={3} height={420}>
      <Card
        onMouseEnter={() => setShowProductDetails(true)}
        onMouseLeave={() => setShowProductDetails(false)}
        sx={{
          position: "relative",
          height: "100%",
          maxHeight: "100%",
          transform: "scale(0.98)",
          width: "100%",
          maxWidth: "100%",
          boxShadow: "none",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          transition: "all ease-in 0.2s",
          "&:hover": {
            transform: "scale(1)",
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          },
        }}
      >
        <CardMedia
          sx={{
            height: "50%",
            objectFit: "contain",
          }}
          component="img"
          height="140"
          image={product.image}
          alt={product.productTitle}
        />
        {!showProductDetails ? (
          <CardContent
            sx={{
              width: "100%",
              height: "50%",
              justifyContent: "center",
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Typography
              gutterBottom
              variant="body1"
              color={"GrayText"}
              component="div"
            >
              {product.productTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={"bold"}
              fontSize={20}
            >
              {formatThePrice(product.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.productDescription.split(" - ")[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.productDescription.split(" - ")[1]}
            </Typography>
          </CardContent>
        ) : (
          <Box
            width={"100%"}
            height={"100%"}
            position={"absolute"}
            display="flex"
            alignItems={"center"}
            justifyContent={"flex-end"}
            flexDirection="column"
          >
            <Box
              width={"100%"}
              height={"70%"}
              sx={{ background: "#f1f1f188", cursor: "pointer" }}
            >
              <Box
                display="flex"
                alignItems={"flex-start"}
                flexDirection="column"
                p={2}
                gap={0.5}
                width={"100%"}
                height={"50%"}
              >
                <Typography
                  gutterBottom
                  variant="body1"
                  color={"GrayText"}
                  component="div"
                >
                  {product.productTitle}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={"bold"}
                  fontSize={20}
                >
                  {formatThePrice(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.productDescription.split(" - ")[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.productDescription.split(" - ")[1]}
                </Typography>
              </Box>

              <Box
                width={"100%"}
                height={"50%"}
                display={"flex"}
                alignItems="center"
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <Box
                  width={"100%"}
                  height={"50%"}
                  bgcolor={"blue"}
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-around"}
                >
                  <img src={RemoveIcon} alt="remover um item do carrinho" />
                  <TextField
                    sx={{ width: 100 }}
                    id="outlined-number"
                    label="Qtd."
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <img src={AddIcon} alt="adicionar mais um item no carrinho" />
                </Box>

                <Button variant="contained" sx={{ width: "80%" }}>
                  Adicionar
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Card>
    </Grid>
  );
}
