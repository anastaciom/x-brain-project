import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/Checkout";
import ProductsPage from "../pages/Products";
import { RootState } from "../redux/store";

export default function AppRoutes() {
  const { data } = useSelector((state: RootState) => state.form);

  useEffect(() => {
    PrivateRoute();
  }, [data]);

  function PrivateRoute() {
    if (data.email !== "" && data.name !== "" && data.gender !== "") {
      return <CheckoutPage />;
    }
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="*" element={<h1>ERRORR</h1>} />
      <Route path="/" element={<ProductsPage />} />
      <Route path="/checkout" element={<PrivateRoute />} />
    </Routes>
  );
}
