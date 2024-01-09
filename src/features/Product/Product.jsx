import { useSelector } from "react-redux";
import { selectProductById } from "../ProductsList/reducer/productsSlice";
import { useParams } from "react-router-dom";
import { Image, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

export const Product = () => {
  const { pid } = useParams();
  const { Text } = Typography;
  const product = useSelector((state) => selectProductById(state, Number(pid)));
  console.log({ product });
  if (!product) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <div>
        {product.img?.url ? (
          <Image width={300} src={product?.img?.url} />
        ) : null}
      </div>
      <Text>{product.title || ""}</Text>
      <Paragraph>{product?.description}</Paragraph>
    </div>
  );
};
