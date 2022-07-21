import { Box, Grid } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { data } from "../data";

export default function ProductsPage() {
  return (
    <Box width={"100%"} maxWidth={"80%"} m="auto">
      <Header />
      <Grid container>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Footer />
    </Box>
  );
}
