import { useSelector } from "react-redux";
import { selectProductById } from "../ProductsList/reducer/productsSlice";
import { Navigate, useParams } from "react-router-dom";
import { Image, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { productStyle } from "./Product.styles";
import { removeImageLinks } from "../../shared/lib";
import { SanitizedHTML } from "../../shared/ui/SanitizedHTML/SanitizedHTML";

export const Product = () => {
  const { pid } = useParams();
  const { Text } = Typography;
  const product = useSelector((state) => selectProductById(state, Number(pid)));

  if (!product) {
    return <Navigate replace to="/products" />;
  }
  const descriptionHtml = removeImageLinks(product.descriptionHtml);

  return (
    <div>
      <div style={productStyle.imgContainer}>
        {product.img?.url ? (
          <Image width={300} src={product?.img?.url} />
        ) : null}
      </div>
      <Text style={productStyle.title}>{product.title || ""}</Text>
      <Paragraph style={productStyle.description}>
        {descriptionHtml ? <SanitizedHTML html={descriptionHtml} /> : null}
      </Paragraph>
    </div>
  );
};
