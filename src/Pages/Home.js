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
            <Carousel className='mt-4 text-center carousel'>
                <Carousel.Item className='justify-content-md-center'>
                    <Image
                        className="d-block w-80"
                        style={{ maxHeight: '400px' }}
                        src="https://firebasestorage.googleapis.com/v0/b/climbcrafters.appspot.com/o/carousel-2.jpeg?alt=media&token=8b12fe47-e38c-4619-b56e-1911c43685e6"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carouselText'>Reinventing climbing</h3>
                        <p className='carouselText'>Climbing has never reach this perfection</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-80"
                        src="https://firebasestorage.googleapis.com/v0/b/climbcrafters.appspot.com/o/carousel-3.jpg?alt=media&token=73481428-94ac-453a-bca7-691ceb6bb866"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carouselText'>3D printing</h3>
                        <p className='carouselText'>New Technologies involved in current experiences</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-80"
                        src="https://firebasestorage.googleapis.com/v0/b/climbcrafters.appspot.com/o/carousel-1.jpg?alt=media&token=6b8bb4ce-0288-43af-a5df-54e1dd3c9e52"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <h3 className='carouselText'>Reach your limit</h3>
                        <p className='carouselText'>Life is made for adventure</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Home;
