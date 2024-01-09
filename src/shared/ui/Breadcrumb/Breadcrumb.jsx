import { useLocation } from "react-router-dom";
import { Breadcrumb, Divider } from "antd";
import { parsePathname } from "../../lib";

export const UiBreadcrumb = () => {
  const { pathname } = useLocation();
  const paths = parsePathname(pathname);
  return (
    <Breadcrumb style={style.breadcrumb}>
      {paths
        ? paths.map((path, index) => {
            const transformed = path[0].toUpperCase() + path.slice(1);
            return (
              <Breadcrumb.Item key={index}>
                {transformed}
              </Breadcrumb.Item>
            );
          })
        : null}
    </Breadcrumb>
  );
};

const style = {
  breadcrumb: {
    margin: "16px 0",
  },
};
