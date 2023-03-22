import React, { useState, useContext } from "react";
import LoginContext from "../Storage/LoginContext";

const Carrito = () => {

    const loginContext = useContext(LoginContext);
    return (
        <>

            <h1>CARRITO</h1>
                <h2>Mostrar productos carrito</h2>
        </>
    )
}

export default Carrito;