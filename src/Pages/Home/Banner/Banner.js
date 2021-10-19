

import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Services from '../../Services/Services';
import './Banner.css'
import Slide from "react-reveal/Slide";
const Banner = () => {
    const { services } = useAuth()
    return (
        <div>
            <Row xs={12} className="banner mx-auto">
            <Slide left cascade>
                <Col xs={12} className="text-center title">
                    <h1 xs={12} className="text-uppercase col-12">Make <span>YOUR</span> Body <span>Strong</span></h1>

                    <p xs={12} className="mt-4">the condition of being physically and mentally fit with good health. <br /> It is the ability to carry out daily tasks with vigor and alertness,
                        <br /> without undue fatigue, and with ample energy to enjoy life.</p>

                    <div>
                        <Button className="btn-regular mt-4" variant="">JOIN WITH US</Button>
                    </div>
                </Col>
            </Slide>
            </Row>
            <Container className="mt-5 services">
                <div>
                    <h1 className="text-center">Our <span>Services</span></h1>
                    <Row xs={1} md={3} className="g-4 mb-2 mt-4">
                        {services.slice(0, 6).map(service => <Services key={service.id} service={service}></Services>)}
                    </Row>
                </div>
            </Container>
        </div>
    );
};
export default Banner;