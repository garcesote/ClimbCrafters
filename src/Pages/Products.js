import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Product from "../Components/Product";


const Products = () => {

    const[products, setProducts] = useState([]);

    const axiosTest = () => {
        console.log("Axios is ok")
        axios.get("https://clase-react-8ce4d-default-rtdb.europe-west1.firebasedatabase.app/producto.json")
        .then(res => {
            let arrayProductos = [];
            const data = res.data;
            for(let key in data){
                arrayProductos.push({
                    id:key,
                    nombre:data[key].nombre,
                    descripcion:data[key].descripcion,
                    precio:data[key].precio,
                    fecha:new Date(data[key].fecha)
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
                array.map((elemento) => {
                    return(
                        <Col>
                            <Product producto={elemento}></Product>
                        </Col>
                    )
                })
            }
            </Row>
        );
    }

    return(
<<<<<<< HEAD
        <Container style={{maxWidth: '100%', minHeight: '100%'}} className='border'>
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        
        </Container>

=======
        <>
            {contenido}
        </>
>>>>>>> b26610b53a18fbd3eb59a6218dc90ec3421d73b3
    )
}

export default Products;