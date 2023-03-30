import React, { useState, useContext, useEffect } from "react";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import axios from 'axios';
import "./Orders.css";
import OrderItem from "../Components/OrderItem";
import OrdersContext from '../Storage/OrdersContext';

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
                                <h1> See our products and make your first order!</h1>
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
                    <h1>Login to see your orders</h1>
            }

        </div>
    )
}

export default Orders;