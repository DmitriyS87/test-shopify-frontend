import { createBrowserRouter, redirectDocument } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductPage } from "../pages/ProductPage";
import { MainLayout } from "../shared/ui/MainLayout";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirectDocument("/products");
    },
    element: <PageNotFound />,
  },
  {
    path: "/",
    // loader: () => { return redirectDocument("/products") },
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:pid",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
