import { Layout, Grid, theme } from "antd";
import React from "react";
import { UiBreadcrumb } from "./Breadcrumb/Breadcrumb";
import { Outlet } from "react-router-dom";

const containerStyle = {
  height: "100vh",
  minWidth: "360px",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  padding: "0 36px",
  overflow: "auto",
};

const getContentStyle = (breakpoints) => {
  return {
    ...contentStyle,
    padding:
      breakpoints.lg || breakpoints.xl || breakpoints.xxl ? "0 36px" : "0 12px",
  };
};

const { Content, Footer, Header } = Layout;
const { useBreakpoint } = Grid;

export const MainLayout = ({ children }) => {
  const screens = useBreakpoint();
  const {
    token: { colorBgContainer, borderRadiusLG, colorTextDescription },
  } = theme.useToken();

  return (
    <Layout style={containerStyle}>
      <Header style={{ display: "flex", alignItems: "center" }}></Header>
      <Content style={getContentStyle(screens)}>
        <UiBreadcrumb />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            color: colorTextDescription,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Test app created by DmitriyS87
      </Footer>
    </Layout>
  );
};
