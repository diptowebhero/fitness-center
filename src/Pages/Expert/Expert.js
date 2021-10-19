import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
const Expert = ({ expert }) => {
    const { img, name, job } = expert
    return (
        <Col>
            <Zoom>
                <Card className="text-center border-0 shadow">
                    <Card.Img style={{ height: "350px" }} variant="top" src={img} />
                    <Card.Body className="text-center">
                        <div className="mb-3">
                            <Card.Title>{name}</Card.Title>
                            <h5>{job}</h5>
                        </div>
                        <div className="social-icon text-center">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    );
};

export default Expert;