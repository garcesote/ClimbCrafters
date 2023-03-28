import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AutContext from "../Storage/AutContext";
import LoginContext from "../Storage/LoginContext";

const DetailProduct = () => {

    const params = useParams();

    const id = params.id;

    const carritoContext = useContext(AutContext);

    const carritoData = carritoContext.carritoData;

    const loginContext = useContext(LoginContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        
        fetch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/products/"+id+".json")
        .then((response) => response.json())
        .then((data) => {
            setDescription(data.descripcion);
            setName(data.nombre);
            setPrice(data.precio);
            setImg(data.img);
        });
                
    },[])

    /*const removeHandler = () => {
        let rep = false;
        let item = [...carritoData];
        
        item.filter((elemento) => {
            if(elemento.id===id){
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
        carritoContext.set(true);

    }*/

    const removeHandler = () => {
        let rep = false;
        let item = [...carritoData];

        item.filter((elemento) => {
            if(elemento.id===id){
                if(elemento.cantidad>0){
                    elemento.cantidad -= 1;
                    axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito/"+elemento.id+".json", {cantidad: elemento.cantidad})
                    .then((response) => {
                        console.log('MENOS 1');
                    });
                    rep = true;

                    //ELIMINO EL PRODUCTO DEL CARRITO SI LA CANTIDAD ES CERO
                    if(elemento.cantidad==0){
                        //EN LOCAL
                        const rem_item = item.filter((obj) => {
                            return obj.id !== elemento.id;
                        })
                        carritoContext.setCarritoData(rem_item);

                        //EN LA NUBE
                        axios.delete("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito/"+elemento.id+".json")
                        .then((response) => {
                            console.log('BORRADO NUBE');
                        });
                        
                    }else{
                        carritoContext.setCarritoData(item);
                    }

                    rep = true;
                    
                }
            }
        });
        if(!rep){
            alert('No hay cantidad de ese producto');
        }

        
        carritoContext.set(true);

    }

    const addHandler = () => {
        
        console.log('Carrito: ');
        console.log(carritoData);
        let rep = false;
        let item = [...carritoData]
        
        item.filter((elemento) => {
            if(elemento.id===id){
                elemento.cantidad = elemento.cantidad + 1;
                axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito/"+elemento.id+".json", {cantidad: elemento.cantidad})
                .then((response) => {
                    console.log('MAS 1');
                });
                rep = true;
            }
        });

        if(!rep){
            let productoCarrito = {descripcion: description, nombre: name, precio: price, img: img, cantidad: 1, id:id};
            item.push(productoCarrito);
            axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito.json", {[id]: productoCarrito})
            .then((response) => {
                alert('Nuevo producto añadido al carrito');
            }); 
        }

        carritoContext.setCarritoData(item);
        carritoContext.set(true);
        
    }
    /*const addHandler = () => {
        
        console.log('Carrito: ');
        console.log(carritoData);
        let rep = false;
        let item = [...carritoData]
        
        item.filter((elemento) => {
            if(elemento.id===id){
                elemento.cantidad = elemento.cantidad + 1;
                axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito/"+elemento.id+".json", {cantidad: elemento.cantidad})
                .then((response) => {
                    console.log('MAS 1');
                });
                rep = true;
            }
        });

        if(!rep){
            let productoCarrito = {descripcion: description, nombre: name, precio: price, img: img, cantidad: 1, id:id};
            item.push(productoCarrito);
            axios.patch("https://climbcrafters-default-rtdb.europe-west1.firebasedatabase.app/users/"+loginContext.email+"/carrito.json", {[id]: productoCarrito})
            .then((response) => {
                alert('Nuevo producto añadido al carrito');
            }); 
        }

        carritoContext.setCarritoData(item);
        carritoContext.set(true);

    }*/

    return(
    <>
        <div>
            <Container>
                <Row className="vh-70 me-6 d-flex justify-content-center align-items-center">
                    <Col xs={8} className='text-center bg-light mt-5 p-4'>
                        <img src={img} width='250px' height='auto'></img>
                        <p className="mt-2"><big><b>Name:</b></big> {name}</p>
                        <p><big><b>Price:</b></big> {price} $</p>
                        <p><big><b>Description:</b></big> {description}</p>
                        <Container>
                            <Row> 
                                <Col>
                                    <Button variant="outline-success" size='lg' onClick={addHandler}>+</Button>
                                </Col>
                                <Col>
                                    <Button variant="outline-danger"  size='lg' onClick={removeHandler}>-</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

export default DetailProduct;