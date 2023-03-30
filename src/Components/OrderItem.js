import React, { useContext } from 'react';
import './Order.css';
import { Link, Navigate } from 'react-router-dom';
import LoginContext from '../Storage/LoginContext';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import OrdersContext from '../Storage/OrdersContext';

const OrderItem = ({ orderId, name, products }) => {

    //TODO: Eliminar order
    // Delete order from context and database
    const loginContext = useContext(LoginContext);
    const ordersContext = useContext(OrdersContext);

    const handleDeleteOrder = () => {
        console.log("Delete order " + orderId)
        axios.delete("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/" + loginContext.email + "/pedidos/" + orderId + ".json")
            .then((response) => {
                console.log(response)
                ordersContext.setReload(!ordersContext.reload)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="order">
            <Link to={`/order-details/${orderId}`}>
                <div>
                    <p>{name} </p>
                    <p>{products}</p>
                </div>
            </Link>
            <Button onClick={handleDeleteOrder}>X</Button>
        </div>

    )
}

export default OrderItem