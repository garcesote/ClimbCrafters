import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AutContext from "../Storage/AutContext";
import { useContext } from "react";

const Header = () => {


    const carrito = useContext(AutContext);

    const carritoHandler = () => {
        carrito.set(!carrito.carrito);
        console.log(carrito.carrito);
    }

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ClimbCrafters</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <AiOutlineShoppingCart color="white" size={'40px'} onClick={carritoHandler}/>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
