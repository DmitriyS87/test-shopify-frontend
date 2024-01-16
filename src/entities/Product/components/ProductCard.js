import React, { useContext } from "react";
import { UiCard } from "../../../shared/ui/UiCard/UiCard";
import classNames from "classnames";
import { ConfigContext } from "antd/es/config-provider";
import "./product-description.css";
import { productCardStyle } from "./ProductCard.style";
import { removeImageLinks } from "../../../shared/lib";
import CanvasImg from "../../../shared/ui/CanvasImg/CanvasImg";
import { SanitizedHTML } from "../../../shared/ui/SanitizedHTML/SanitizedHTML";

export const ProductCard = ({ product, isLoading }) => {
  const { img, title } = product;
  const descriptionHtml = removeImageLinks(product.descriptionHtml);

  const { getPrefixCls } = useContext(ConfigContext);
  const uiLibPrefix = getPrefixCls("card");
  const uiLibMetaCN = classNames(`${uiLibPrefix}-meta`);
  const descriptionCN = classNames(
    `${uiLibPrefix}-meta-description`,
    "product-html-description",
  );
  return (
    <UiCard
      bordered={false}
      loading={isLoading}
      hoverable
      headStyle={productCardStyle.head}
      bodyStyle={productCardStyle.body}
      style={productCardStyle.card}
      extra={
        img ? (
          <CanvasImg
            alt={img?.altText ?? "product picture"}
            style={productCardStyle.img}
            src={img.url ?? ""}
          />
        ) : null
      }
    >
      <div className={uiLibMetaCN} style={productCardStyle.meta}>
        <div className={`${uiLibPrefix}-meta-detail`}>
          {title ? (
            <div className={`${uiLibPrefix}-meta-title`}>{title}</div>
          ) : null}
          <div className={descriptionCN} style={productCardStyle.metaDescr}>
            {descriptionHtml ? <SanitizedHTML html={descriptionHtml} /> : null}
          </div>
        </div>
      </div>
    </UiCard>
  );
};
