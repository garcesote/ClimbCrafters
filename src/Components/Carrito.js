import React, { useState, useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import CarritoItem from "./CarritoItem";

const Carrito = () => {

    const loginContext = useContext(LoginContext);

    const id = loginContext.email;

    const carritoContext = useContext(AutContext);

    const carritoData = carritoContext.carritoData;

    return (
        <>
            <h1>CARRITO</h1>
                {
                    carritoData.map((elemento) => {
                        console.log('HOLLAAAA')
                        return(
                            <Container>
                                <CarritoItem key={elemento} producto={elemento}></CarritoItem>
                            </Container>
                        )
                    })  
                
                }

                <Link to="/confirmation"><Button variant='primary'>Finalizar compra</Button></Link>
        </>
    )
}

export default Carrito;