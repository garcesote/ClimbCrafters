import React from 'react';
import './Order.css';

const OrderItem = ({name}) => {

    return(
        <div className="order">
            {name}
        </div>
    )
}

export default OrderItem