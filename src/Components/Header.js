import React, { useEffect } from "react";
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

    const carritoHandler = () => {
        carrito.set(!carrito.carrito);
        console.log(carrito.carrito);
    }
    const logout = () => {
        loginContext.setLogin(false);
        loginContext.setLoginData("");
        localStorage.removeItem("idToken");
    }

    // useEffect(() => {

    //     const localIdToken = localStorage.getItem("idToken");
    //     if(localIdToken) {
    //         console.log("Session detected")
    //         console.log(localIdToken)

    //         axios.get('https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users.json')
    //         .then((response) => {
    //            const loggedUser = Object.values(response.data).filter((user) => {
    //             console.log(user)
    //                 if(user !== null) {
    //                     if(user.idToken !== null && user.idToken) {
    //                         return user.idToken === localIdToken
    //                     }
    //                 }
    //            })

    //            if(loggedUser != '') {
    //             loginContext.setLogin(true);
    //             console.log("sesión iniciada")
    //            }
    //             // console.log(loggedUser)
    //         }).catch((error) => {
    //             console.log(error)
    //         })

    //     // console.log("Header mounted")
    //     }
    //     else {
    //         console.log("No session detected")
    //     }
        
    // }, [])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: '10vh' }}>
                <Container>
                    <Navbar.Brand>
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
                                    <AiOutlineShoppingCart color="white" size={'30px'} onClick={carritoHandler} />

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

                </Container>
            </Navbar>
        </>
    );
}

export default Header;
