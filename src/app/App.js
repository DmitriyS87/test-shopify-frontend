import { ConfigProvider } from "antd";
import { globalTheme } from "../core/theme";
import ProductsPage from "../pages/ProductsPage";

function App() {
  return (
    <ConfigProvider theme={globalTheme}>
      <ProductsPage />
    </ConfigProvider>
  );
}

export default App;
