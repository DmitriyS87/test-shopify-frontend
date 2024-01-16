import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { MainLayout } from "../shared/ui/MainLayout";
import { Alert, Button, Space } from "antd";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const redirectToMain = () => {
    navigate("/");
  };

  return (
    <MainLayout>
      <Space direction="vertical" size={16}>
        <h1>Something whent wrong!</h1>
        <Button size="large" type="dashed" onClick={redirectToMain}>
          Try going to Main page
        </Button>
        <Alert
          message="Error"
          description={
            error.statusText ||
            error.message ||
            "Try reload page or back again later."
          }
          type="error"
          showIcon
        />
      </Space>
    </MainLayout>
  );
};

export default ErrorPage;
