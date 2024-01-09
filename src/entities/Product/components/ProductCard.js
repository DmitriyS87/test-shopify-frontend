import React, { useContext } from "react";
import { UiCard } from "../../../shared/ui/UiCard/UiCard";
import classNames from "classnames";
import { ConfigContext } from "antd/es/config-provider";
import "./product-description.css";
import { productCardStyle } from "./ProductCard.style";
import { removeImageLinks, sanitizeHtml } from "../../../shared/lib";
import CanvasImg from "../../../shared/ui/CanvasImg/CanvasImg";

export const ProductCard = ({ product, isLoading }) => {
  const { img, title, descriptionHtml } = product;
  // ! TODO check removeImageLinks to avoid unnecessary cut
  const sanitizedDescriptionHtml = sanitizeHtml(
    removeImageLinks(descriptionHtml),
  );

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
        <CanvasImg
          alt={img?.altText ?? "product photo"}
          style={productCardStyle.img}
          src={img?.url ?? ""}
        />
      }
    >
      <div className={uiLibMetaCN} style={productCardStyle.meta}>
        <div className={`${uiLibPrefix}-meta-detail`}>
          {title ? (
            <div className={`${uiLibPrefix}-meta-title`}>{title}</div>
          ) : null}
          <div className={descriptionCN} style={productCardStyle.metaDescr}>
            {descriptionHtml ? (
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedDescriptionHtml }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </UiCard>
  );
};
