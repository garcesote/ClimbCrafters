import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import OrdersContext from "../Storage/OrdersContext";
import Order from "../Components/Order";

const OrderDetails = () => {

    const params = useParams();

    const id = params.id;

    const loginContext = useContext(LoginContext);
    const ordersContext = useContext(OrdersContext);

    const desiredOrder = ordersContext.orders.filter((order) => {
        if (order.orderId === id) {
            return order
        }
    });

    return (
        <>
            <h1>Detalles de tu pedido</h1>
            <Order data={desiredOrder[0].products}></Order>
        </>
        )
    }
    
export default OrderDetails;