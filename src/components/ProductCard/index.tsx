import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { IData } from "../../data/types";
import {formatThePrice} from "../../utils/formatThePrice";

interface ProductCardProps {
  product: IData;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} height={420}>
      <Card
        sx={{
          height: "100%",
          maxHeight: "100%",
          // transform: "scale(0.95)",
          cursor: "pointer",
          width: "100%",
          maxWidth: "100%",
          padding: 2,
          boxShadow: "none",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
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
          alt="green iguana"
        />
        <CardContent
          sx={{
            height: "50%",
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
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
      </Card>
    </Grid>
  );
}
