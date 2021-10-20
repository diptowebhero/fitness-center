import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
const Services = ({ service }) => {
    const { id, img, name, desc } = service
    return (
        <Col>
            <Zoom>
                <Card style={{height:"460px"}} className="p-2 border-0 shadow">
                    <Card.Img style={{ height: "250px", borderRadius: "5px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {desc.slice(0, 100)}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/details/${id}`}>
                        <Button className="btn-regulars w-100" variant="">Details</Button>
                    </Link>
                </Card>
            </Zoom>
        </Col>
    );
};

export default Services;