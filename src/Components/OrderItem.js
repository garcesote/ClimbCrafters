import React from 'react';
import './Order.css';
import { Link, Navigate } from 'react-router-dom';

const OrderItem = ({ orderId, name, products }) => {

    //TODO: Eliminar order

    return (
        <Link to={`/order-details/${orderId}`} className="order">
            <div>
                <p>{name} </p>
                <p>{products}</p>
            </div>
        </Link>
    )
}

export default OrderItem