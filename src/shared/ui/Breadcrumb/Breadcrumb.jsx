import { useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { parsePathname } from "../../lib";

export const UiBreadcrumb = () => {
  const { pathname } = useLocation();
  const paths = parsePathname(pathname).map((path) => ({
    title: path[0].toUpperCase() + path.slice(1),
  }));
  return <Breadcrumb items={paths} separator=">" style={style.breadcrumb} />;
};

const style = {
  breadcrumb: {
    margin: "16px 0",
  },
};
