import { Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/Checkout";
import ProductsPage from "../pages/Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<h1>ERRORR</h1>} />
      <Route path="/" element={<ProductsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
