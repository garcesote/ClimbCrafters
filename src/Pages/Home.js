import logo from './../logo.svg';
import axios from 'axios';
import './../App.css';
import { Carousel } from 'react-bootstrap';


function Home() {
  const axiosTest = () => {
    console.log("Axios is ok")
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
       console.log(res.data)
      });
  }
  return (
    <Carousel className='mt-4' style={{height:'400px'}}>
            <Carousel.Item>
                <img
                className="d-block w-80"
                style={{maxHeight:'400px'}}
                src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/ratonGaming.jpg?alt=media&token=d83384e7-e7a3-4eea-9c21-043937d68e83"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-80"
                src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/tecladoASMR.jpg?alt=media&token=3c33d996-77a7-4705-a22c-1c3ea6a1d754"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-80"
                src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/logo2.png?alt=media&token=267ced93-bd0e-4044-afca-df66572dd5e7"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  );
}

export default Home;
