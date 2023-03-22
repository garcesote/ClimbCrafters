import { Row } from "react-bootstrap";

const CarritoItem = (props) => {
    <Row><big><b>Name:</b></big> {props.producto.nombre} <big><b> Cantidad:</b></big> {props.producto.cantidad}</Row>
}

export default CarritoItem;