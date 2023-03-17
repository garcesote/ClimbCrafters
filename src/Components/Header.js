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
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/orders">Orders</Link>
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
