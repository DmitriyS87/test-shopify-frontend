import { createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductPage } from "../pages/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
  },
  {
    path: "/:pid",
    element: <ProductPage />,
  },
]);
