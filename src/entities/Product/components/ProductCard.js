import React from 'react';
import { Card } from 'antd';

const productCardStyle = {
    container: {
        width: 236,
        margin: '0 auto'
    },
}

export const ProductCard = () => {
    return (
        <Card
            hoverable
            style={productCardStyle.container}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );
}