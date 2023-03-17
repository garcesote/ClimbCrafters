import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AutContext from "../Storage/AutContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

const Header = () => {


    const carrito = useContext(AutContext);

    const carritoHandler = () => {
        carrito.set(!carrito.carrito);
        console.log(carrito.carrito);
    }

    return(
        <>
            <Navbar bg="dark" variant="dark" style={{ height: '10vh'}}>
                <Container>
                    <Navbar.Brand href="/">ClimbCrafters</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "2vw" }}>Home</Link>
                        <Link to="/products" style={{ color: "white", textDecoration: "none", marginRight: "2vw"}}>Products</Link>
                        <Link to="/orders" style={{ color: "white", textDecoration: "none", marginRight: "2vw" }}>Orders</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <AiOutlineShoppingCart color="white" size={'30px'} onClick={carritoHandler}/>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
