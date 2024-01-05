import React from 'react';
import { List } from 'antd';
import { ProductCard } from '../../entities/Product/components/ProductCard';

export const ProductsList = () => {
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 5',
        },
        {
            title: 'Title 6',
        },
        {
            title: 'Title 7',
        },
        {
            title: 'Title 8',
        },
        {
            title: 'Title 9',
        },
    ];

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
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <ProductCard />
                </List.Item>
            )}
        />
    );
};
