import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { IData } from "../../data/types";
import { formatThePrice } from "../../utils/formatThePrice";
import {
  cardStyles,
  cardContentStyles,
  cardMediaStyles,
} from "./additionalStyles";
import CardDetailsHover from "./CardDetailsHover";
interface ProductCardProps {
  product: IData;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showProductDetails, setShowProductDetails] = useState(false);
  return (
    <Grid item xs={12} sm={4} md={3} lg={3} height={400}>
      <Card
        onMouseEnter={() => setShowProductDetails(true)}
        onMouseLeave={() => setShowProductDetails(false)}
        sx={cardStyles}
      >
        <CardMedia
          sx={cardMediaStyles}
          component="img"
          height="140"
          image={product.image}
          alt={product.productTitle}
        />
        {!showProductDetails ? (
          <CardContent sx={cardContentStyles}>
            <Typography
              gutterBottom
              variant="body1"
              color={"GrayText"}
              component="div"
              fontSize={15}
            >
              {product.productTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={"bold"}
              fontSize={18}
            >
              {formatThePrice(product.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={12}>
              {product.productDescription.split(" - ")[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={12}>
              {product.productDescription.split(" - ")[1]}
            </Typography>
          </CardContent>
        ) : (
          <CardDetailsHover product={product} />
        )}
      </Card>
    </Grid>
  );
}
