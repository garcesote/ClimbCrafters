import React, { useState, useContext, useEffect } from "react";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import axios from 'axios';
import "./Orders.css";

const Orders = () => {

    const carrito = useContext(AutContext);
    const loginContext = useContext(LoginContext);
    const [orders, setOrders] = useState([]);

    const handleOrderDetails = (event) => {
        console.log(event.target.id)
    }

    // petición a la base de datos para obtener todos los pedidos
    // useEffect(() => {
    //     if (loginContext.login === true) {
    //         axios.get("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/" + loginContext.email.split(".").join(" ") + "/pedidos.json")
    //             .then((response) => {
    //                 let ordersArray = [];
    //                 for (let key in response.data) {
    //                     ordersArray.push({
    //                         orderId: key,
    //                         details: response.data[key].details,
    //                         products: response.data[key].products,
    //                     })
    //                     //console.log(key)
    //                     //console.log(response.data[key].details)
    //                 }
    //                 setOrders(ordersArray);

    //             }).catch((error) => {
    //                 console.log(error)
    //             })
    //     }

    // }, [loginContext])
    useEffect(() => {
        if (loginContext.login === true) {
            console.log(loginContext)
            console.log("Getting orders");
        }
    }, [loginContext])

    // console.log(orders);
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
                                    <div className="order" onClick={handleOrderDetails} id={item.orderId}>
                                        <p className="orderDetails"> Some products: {item.products[0].nombre}</p>
                                        <p className="orderDetails"> Address: {item.details.address}</p>
                                        <p className="orderDetails"> Name: {item.details.name}</p>
                                        <p className="orderDetails"> Productos: {item.products.length}</p>
                                    </div>

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