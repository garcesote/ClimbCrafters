import { Button, Col, Container, Row } from "react-bootstrap";

const Product = (props) => {

    return(
        <Container className='border text-center' style={{width: '200px', minWidth: '150px', minWidth: '250px', height:'200px', backgroundColor:'gray'}} >
            <Row className='border text-center' style={{maxWidth: '150px',maxHeight: '150px'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/ratonGaming.jpg?alt=media&token=d83384e7-e7a3-4eea-9c21-043937d68e83"></img>
            </Row>
            <Row>
                <Col>
                    <Button className="m-2">+</Button>
                </Col>
                <Col>
                    <Button className="m-2">-</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default Product;