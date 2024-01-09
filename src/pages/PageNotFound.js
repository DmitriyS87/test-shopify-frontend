import React from "react";
import { useRouteError } from "react-router-dom";
import { MainLayout } from "../shared/ui/MainLayout";

const PageNotFound = () => {
  const error = useRouteError();

  return (
    <MainLayout>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
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
