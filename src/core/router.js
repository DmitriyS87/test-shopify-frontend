import { Navigate, createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductPage } from "../pages/ProductPage";
import PageNotFound from "../pages/PageNotFound";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/products" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:pid",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
