import axios from "axios";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";
import './Product.css';


const Product = (props) => {

    const carritoContext = useContext(AutContext);

    const loginContext = useContext(LoginContext);

    const carritoData = carritoContext.carritoData;

    const producto = props.producto;

    const addHandler = () => {
        
        console.log('Carrito: ');
        console.log(carritoData);
        let rep = false;
        let item = [...carritoData]
        
        item.filter((elemento) => {
            if(elemento.id===producto.id){
                elemento.cantidad = elemento.cantidad + 1;
                axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito/"+elemento.id+".json", {cantidad: elemento.cantidad})
                .then((response) => {
                    console.log('MAS 1');
                });
                rep = true;
            }
        });

        if(!rep){
            let productoCarrito = producto;
            productoCarrito.cantidad = 1;
            item.push(productoCarrito);
            const id = productoCarrito.id;
            delete productoCarrito.id;
            axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito.json", {[id]: productoCarrito})
            .then((response) => {
                alert('Nuevo producto añadido al carrito');
            });
        }

        console.log('Producto: ');
        console.log(producto);
        carritoContext.setCarritoData(item);
        console.log('MAIL: ');
        console.log(loginContext.email);
        
    }

    const removeHandler = () => {
        let rep = false;
        let item = [...carritoData];
        console.log(producto.id)
        item.filter((elemento) => {
            if(elemento.id===producto.id){
                console.log(producto.id)
                if(elemento.cantidad>0){
                    elemento.cantidad -= 1;
                    axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito/"+elemento.id+".json", {cantidad: elemento.cantidad})
                    .then((response) => {
                        console.log('MENOS 1');
                    });
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