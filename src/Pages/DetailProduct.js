import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailProduct = () => {

    const params = useParams();

    const id = params.id;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        
        fetch("https://clase-react-8ce4d-default-rtdb.europe-west1.firebasedatabase.app/ClimbCrafters/"+id+".json")
        .then((response) => response.json())
        .then((data) => {
            setDescription(data.descripcion);
            setName(data.nombre);
            setPrice(data.precio);
            setImg(data.img);
        });
        
        //axios.get('https://clase-react-8ce4d-default-rtdb.europe-west1.firebasedatabase.app/producto.json')
        
    },[])

    return(
    <>
        <div>
            <Container>
                <Row className="vh-70 me-6 d-flex justify-content-center align-items-center">
                    <Col xs={8} className='text-center bg-light mt-5 p-4'>
                        <img src={img}></img>
                        <p className="mt-2"><big><b>Name:</b></big> {name}</p>
                        <p><big><b>Price:</b></big> {price} $</p>
                        <p><big><b>Description:</b></big> {description}</p>
                        <Container>
                            <Row> 
                                <Col>
                                    <Button variant="outline-success" size='lg'>+</Button>
                                </Col>
                                <Col>
                                    <Button variant="outline-danger"  size='lg'>-</Button>
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