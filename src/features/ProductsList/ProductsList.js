import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { List } from 'antd';
import { ProductCard } from '../../entities/Product/components/ProductCard';
import { getProductsList } from './api';
import { useAsync } from '../../shared/hooks/useAsync';

const prepareProductProps = ({ description, descriptionHtml, title, images }) => ({
    img: images ? images[0] : null,
    title,
    description,
    descriptionHtml,
})

export const ProductsList = () => {
    const { error, status, data, run } = useAsync({
        status: 'pending',
    });
    // ! TODO clearify what type of data is provided
    const products = data?.products || [];

    useEffect(() => {
        run(getProductsList());
    }, [run]);

    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 5,
            }}
            dataSource={data || products}
            renderItem={(product, idx) => (
                <List.Item key={product.id}>
                    <Link to={`/${product.urlId || idx}`}>
                        <ProductCard isLoading={status === "pending"} product={prepareProductProps(product)} />
                    </Link>
                </List.Item>
            )}
        />
    );
};
