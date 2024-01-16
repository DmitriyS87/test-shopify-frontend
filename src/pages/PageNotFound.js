import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { MainLayout } from "../shared/ui/MainLayout";
import { Button } from "antd";

const PageNotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const redirectToMain = () => {
    navigate("/");
  };

  return (
    <MainLayout>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button size="large" type="dashed" onClick={redirectToMain}>
        Dashed Button
      </Button>
      {error ? (
        <>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </>
      ) : null}
    </MainLayout>
  );
};

export default PageNotFound;
