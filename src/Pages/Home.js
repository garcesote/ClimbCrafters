// import axios from 'axios';
import React, { useContext } from 'react';
import styles from './Home.css';
import './Home.css'
import { Carousel, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginContext from '../Storage/LoginContext';


function Home() {

    const loginContext = useContext(LoginContext);

    return (
        <>
            <Carousel className='mt-4 text-center' class='carousel'>
                <Carousel.Item className='justify-content-md-center'>
                    <Image
                        className="d-block w-80"
                        style={{ maxHeight: '400px' }}
                        src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-2.jpeg?alt=media&token=8e80bfe5-a437-49b4-bf12-c36f9d3231a2"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 class='carouselText'>Reinventing climbing</h3>
                        <p class='carouselText'>Climbing has never reach this perfection</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-80"
                        src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-3.jpg?alt=media&token=65f63113-a775-4638-8fe0-2d762846960c"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 class='carouselText'>3D printing</h3>
                        <p class='carouselText'>New Technologies involved in current experiences</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-80"
                        src="https://firebasestorage.googleapis.com/v0/b/clase-react-8ce4d.appspot.com/o/carousel-1.jpg?alt=media&token=88f8f1d1-892a-42ed-adfc-b21fbb57f791"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <h3 class='carouselText'>Reach your limit</h3>
                        <p class='carouselText'>Life is made for adventure</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Home;
