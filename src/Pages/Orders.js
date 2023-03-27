import React , { useState, useContext, useEffect }from "react";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import axios from 'axios';

const Orders = () => {

    const carrito = useContext(AutContext);
    const loginContext = useContext(LoginContext);

    useEffect(() => {
        // login
        console.log(loginContext.email)
        axios.get("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/" + loginContext.email + "/pedidos.json", )
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return(
        <div>
            {
                loginContext.login 
                ?
                <h1>ORDERS PAGE</h1>
                :
                <h1>Login to see your orders</h1>
            }

        </div>
    )
}

export default Orders;