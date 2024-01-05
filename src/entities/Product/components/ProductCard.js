import React from 'react';
import { Card } from 'antd';

export const ProductCard = () => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );
}