import { ConfigProvider } from "antd";
import { globalTheme } from "../core/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => (
  <ConfigProvider theme={globalTheme}>
    <RouterProvider router={router} />
  </ConfigProvider>
);

export default App;
