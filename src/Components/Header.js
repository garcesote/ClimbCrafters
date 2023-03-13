import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from '../img/logoCesta.png';
const Header = () => {
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
                        <Image style={{width: '50px'}} src={'https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/logo2.png?alt=media&token=267ced93-bd0e-4044-afca-df66572dd5e7'}></Image>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Header;
