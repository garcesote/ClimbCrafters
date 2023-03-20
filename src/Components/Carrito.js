import React, { useState, useContext } from "react";
import LoginContext from "../Storage/LoginContext";

const Carrito = () => {

    const loginContext = useContext(LoginContext);
    return (
        <>

            <h1>CARRITO</h1>
            {
                loginContext.login ?
                <h2>Mostrar productos carrito</h2>
                :
                <h1>Login to see your basket</h1>
            }
        </>
    )
}

export default Carrito;