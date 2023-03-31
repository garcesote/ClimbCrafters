import React, { useEffect, useRef } from "react";
import { Container, Image, Nav, Navbar, Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AutContext from "../Storage/AutContext";
import LoginContext from '../Storage/LoginContext';
import { useContext } from "react";
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";

const Header = () => {

    const carrito = useContext(AutContext);
    const loginContext = useContext(LoginContext);

    const iconRef = useRef();

    const carritoData = carrito.carritoData;
    
    useEffect(() => {
        if(carritoData.length>0 && loginContext.login){
            iconRef.current.color = 'green';
        }
    },[carritoData]);
    
    const carritoHandler = () => {
        carrito.set(!carrito.carrito);
    }
    const logout = () => {
        loginContext.setLogin(false);
        loginContext.setLoginData("");
        localStorage.removeItem("idToken");
        loginContext.setEmail("");
        carrito.setCarritoData([]);

        carrito.set(false);
        
        // TODO: crear un modal de logout
        alert("Hope you come back again!")
        
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: '10vh' }}>
                <Container>
                    <Navbar.Brand  ref={iconRef}>
                        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "2vw" }}>ClimbCrafters</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "2vw" }}>Home</Link>
                        <Link to="/products" style={{ color: "white", textDecoration: "none", marginRight: "2vw" }}>Products</Link>
                        <Link to="/orders" style={{ color: "white", textDecoration: "none", marginRight: "2vw" }}>Orders</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {
                            loginContext.login ?
                                <>
                                    <AiOutlineShoppingCart color='white' className="m-4" size={'30px'} onClick={carritoHandler} />

                                    <Button variant="secondary" size="lg">
                                        <Link to="/" style={{ color: "white", textDecoration: "none" }} onClick={logout}>Logout</Link>
                                    </Button>
                                </>
                                :
                                <Button variant="secondary" size="lg">
                                    <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
                                </Button>
                        }
                    </Nav>
                    {/* <Nav>
                        <label style={{color:"white"}}>Welcome {loginContext.email}</label>
                    </Nav> */}

                </Container>
            </Navbar>
        </>
    );
}

export default Header;
