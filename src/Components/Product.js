import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AutContext from "../Storage/AutContext";
import './Product.css';


const Product = (props) => {

    const carritoContext = useContext(AutContext);

    const carritoData = carritoContext.carritoData;

    const producto = props.producto;

    const addHandler = () => {
        
        console.log('Producto: '+producto);
        let rep = false;
        let item = [...carritoData]
        item.filter((elemento) => {
            if(elemento.id===producto.id){
                producto.cantidad += 1;
                rep = true;
            }
        });

        if(!rep){
            let productoCarrito = producto;
            productoCarrito.cantidad = 1;
            item.push(productoCarrito);
        }
        carritoContext.setCarritoData(item);
    }

    const removeHandler = () => {
        let rep = false;
        let item = [...carritoData];
        console.log(producto.id)
        item.filter((elemento) => {
            if(elemento.id===producto.id){
                console.log(producto.id)
                if(producto.cantidad>0){
                    producto.cantidad -= 1;
                    rep = true;
                }
            }
        });
        if(!rep){
            alert('No hay cantidad de ese producto');
        }

        carritoContext.setCarritoData(item);
        console.log(carritoData);
    }
    

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
                    <Button variant="outline-success" onClick={addHandler}>+</Button>
                </Col>
                <Col>
                    <Button variant="outline-danger" onClick={removeHandler}>-</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default Product;