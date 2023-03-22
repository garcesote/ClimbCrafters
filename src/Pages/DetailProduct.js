import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailProduct = () => {

    const params = useParams();

    const id = params.id;

    /*useEffect( () => {
        
        fetch("https://clase-react-8ce4d-default-rtdb.europe-west1.firebasedatabase.app/producto/"+id+".json")
        .then((response) => response.json())
        .then((data) => {
            setDate(data.fecha);
            setDescription(data.descripcion);
            setName(data.nombre);
            setPrice(data.precio);
            setImg(data.url_img);
            console.log(data.nombre);
        });
            
        //axios.get('https://clase-react-8ce4d-default-rtdb.europe-west1.firebasedatabase.app/producto.json')
        
    },[])*/

    return(
    <>
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <p>Producto con id: {id}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

export default DetailProduct;