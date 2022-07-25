import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/Checkout";
import Error404Page from "../pages/Error404";
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
      <Route path="*" element={<Error404Page/>} />
      <Route path="/" element={<ProductsPage />} />
      <Route path="/checkout" element={<PrivateRoute />} />
    </Routes>
  );
}
