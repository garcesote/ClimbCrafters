import React, { useState, useContext, useEffect } from "react";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import axios from 'axios';
import "./Orders.css";
import OrderItem from "../Components/OrderItem";

const Orders = () => {

    const carrito = useContext(AutContext);
    const loginContext = useContext(LoginContext);
    const [orders, setOrders] = useState([]);

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
                        })
                    }
                    setOrders(ordersArray);

                }).catch((error) => {
                    console.log(error)
                })
        }

    }, [loginContext.login])
    
    return (
        <div>
            {
                loginContext.login
                    ?
                    <>
                        <h1>Your orders</h1>
                        {
                            orders.map((item) => {
                                return (
                                    <OrderItem key={item.orderId} name={item.details.name}></OrderItem>
                                    // <div className="order" onClick={handleOrderDetails} id={item.orderId}>
                                    //     <p className="orderDetails"> Some products: {item.products[0].nombre}</p>
                                    //     <p className="orderDetails"> Address: {item.details.address}</p>
                                    //     <p className="orderDetails"> Name: {item.details.name}</p>
                                    //     <p className="orderDetails"> Productos: {item.products.length}</p>
                                    // </div>

                                )
                            })
                        }

                    </>
                    :
                    <h1>Login to see your orders</h1>
            }

        </div>
    )
}

export default Orders;