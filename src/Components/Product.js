import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Product.css';


const Product = (props) => {

    return(
        <Container className='m-2 p-2 rounded' style={{backgroundColor:'#CECECE', maxWidth:'250px', height:'auto'}}>
            <Row className='m-1'>
                <Link to={`/detail-product/${props.producto.id}`}><img src={props.producto.img} width="120px" height="auto"></img></Link>
            </Row>
            <Row> 
                <Col sm={9}>
                    <p>{props.producto.nombre}:</p>
                </Col>
                <Col sm={3}>
                    <p>{props.producto.precio} $</p>
                </Col>
            </Row>
            <Row> 
                <Col>
                    <Button variant="outline-success">+</Button>
                </Col>
                <Col>
                    <Button variant="outline-danger">-</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default Product;