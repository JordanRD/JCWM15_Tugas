import React from 'react'
import {
    Carousel
} from 'react-bootstrap'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

class Carousel1 extends React.Component {
    render() {
        return (
            <div style={{maxHeight:'100vh'}}>
                <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                            alt="First slide"
                            style={{maxHeight:'91vh'}}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                            alt="Second slide"
                            style={{maxHeight:'91vh'}}
                        />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                            alt="Third slide"
                            style={{maxHeight:'91vh'}}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}
export default Carousel1