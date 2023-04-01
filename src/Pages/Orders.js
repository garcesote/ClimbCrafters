import React, { useState, useContext, useEffect } from "react";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import axios from 'axios';
import "./Orders.css";
import OrderItem from "../Components/OrderItem";
import OrdersContext from '../Storage/OrdersContext';
import { Alert, Col, Container, Row } from "react-bootstrap";


const Orders = () => {

    const carrito = useContext(AutContext);
    const loginContext = useContext(LoginContext);
    const ordersContext = useContext(OrdersContext);

    const handleOrderDetails = (event) => {
        console.log(event.target.id)
    }

    // petición a la base de datos para obtener todos los pedidos
    useEffect(() => {
        if (loginContext.login === true) {
            axios.get("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/" + loginContext.email + "/pedidos.json")
                .then((response) => {
                    console.log(response)
                    let ordersArray = [];
                    for (let key in response.data) {
                        ordersArray.push({
                            orderId: key,
                            details: response.data[key].details,
                            products: response.data[key].products,
                            date: response.data[key].date
                        })
                    }
                    ordersContext.setOrders(ordersArray);

                }).catch((error) => {
                    console.log(error)
                })
        }

    }, [loginContext.login])

    useEffect(() => {
        console.log("reloading orders")
        if (loginContext.login === true) {
            axios.get("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/" + loginContext.email + "/pedidos.json")
                .then((response) => {
                    console.log(response)
                    let ordersArray = [];
                    for (let key in response.data) {
                        ordersArray.push({
                            orderId: key,
                            details: response.data[key].details,
                            products: response.data[key].products,
                            date: response.data[key].date
                        })
                    }
                    ordersContext.setOrders(ordersArray);
                }).catch((error) => {
                    console.log(error)
                })
        }

    }, [ordersContext.reload])

    return (
        <div>
            {
                loginContext.login
                    ?
                    <>
                        {
                            ordersContext.orders.length === 0
                                ?
                                <Alert variant='primary'> See our products and make your first order!</Alert>
                                :
                                <>
                                    <h1>Your orders</h1>
                                    {
                                        ordersContext.orders.map((item) => {
                                            return (
                                                <OrderItem orderId={item.orderId} name={item.details.name} products={item.products.length} date={item.date}></OrderItem>
                                            )
                                        })
                                    }
                                </>
                        }
                    </>
                    :
                    <Alert variant='primary'> Login to see your orders</Alert>
            }

        </div>
    )
}

export default Orders;