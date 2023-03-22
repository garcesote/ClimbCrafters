import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginContext from "../Storage/LoginContext";

const Carrito = () => {

    const loginContext = useContext(LoginContext);

    const id = loginContext.email;

    return (
        <>

            <h1>CARRITO</h1>
                <h2>Mostrar productos carrito</h2>

                <Link to="/confirmation"><Button variant='primary'>Finalizar compra</Button></Link>
        </>
    )
}

export default Carrito;