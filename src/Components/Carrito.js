import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import CarritoItem from "./CarritoItem";

const Carrito = (props) => {

    const loginContext = useContext(LoginContext);

    const id = loginContext.email;
    
    let contenido = (
        
        props.data.map((elemento) => {
            return(
                    <Row className="text-center">
                        <CarritoItem key={elemento} producto={elemento}></CarritoItem>
                    </Row>
            )
        })
        
    );

    return (
        <>
            <h1>CARRITO</h1>
            <Container className='border'>
                {contenido}
            </Container>

            <Link to="/confirmation"><Button variant='primary'>Finalizar compra</Button></Link>
        </>
    )
}

export default Carrito;