import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Product from "../Components/Product";


const Products = () => {

    const[products, setProducts] = useState([]);

    const axiosTest = () => {
        console.log("Axios is ok")
        axios.get("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/products.json")
        .then(res => {
            let arrayProductos = [];
            const data = res.data;
            for(let key in data){
                arrayProductos.push({
                    id:key,
                    nombre:data[key].nombre,
                    descripcion:data[key].descripcion,
                    precio:data[key].precio,
                    img: data[key].img,
                })
            }
            setProducts(arrayProductos);
            console.log(arrayProductos);
        });
    }

    useEffect( () => {
        axiosTest();
    },[]);

    let contenido = <Alert variant='primary'>No hay productos</Alert>;

    let array = [];
    
    const times = 20;
    for(let i=0; i<times; i++){
        array.push('a');
    }

    if (products.length > 0) {
        contenido = (
            <Row className="text-center">
            {
                products.map((elemento) => {
                    return(
                        <Col>
                            <Product key={elemento} producto={elemento}></Product>
                        </Col>
                    )
                })
            }
            </Row>
        );
    }

    return(
        <>
            {contenido}
        </>
    )
}

export default Products;