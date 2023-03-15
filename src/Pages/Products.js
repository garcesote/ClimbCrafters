import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';


const Products = () => {

    const[products, setProducts] = useState();

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
        });
    }

    useEffect( () => {
        console.log(products);
    },[])

    return(
        <Container style={{maxWidth: '100%', minHeight: '100%'}} className='border'>
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        
        </Container>

    )
}

export default Products;