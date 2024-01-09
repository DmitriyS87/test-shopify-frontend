import { ConfigProvider } from "antd";
import { globalTheme } from "../core/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "../core/router";
import { Provider } from "react-redux";
import { store } from "../core/store";

const App = () => (
  <Provider store={store}>
    <ConfigProvider theme={globalTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>
);

export default App;
