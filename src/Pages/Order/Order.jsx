import React from 'react';
import Cover from '../Shared/Cover/Cover';
import orderImg from '../../assets/order/order.jpg'
const Order = () => {
    return (
        <div>
            <Cover
            img={orderImg}
            title="Order Food"
            ></Cover>
        </div>
    );
};

export default Order;