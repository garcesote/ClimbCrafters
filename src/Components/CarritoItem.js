import { Container, Row } from "react-bootstrap";

const CarritoItem = (props) => {
    return(
        <Container className='bg-light rounded m-2'>
            <p><big><b>{props.producto.nombre}</b></big></p>  
            <p><b> Cantidad:</b> {props.producto.cantidad}</p>
        </Container>
    )
}

export default CarritoItem;