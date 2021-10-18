import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const {id, img, name, desc } = service
    return (
        <Col>
            <Card className="p-2 border-0 shadow">
                <Card.Img style={{ height: "250px", borderRadius: "5px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
                <Link to ={`/details/${id}`}>
                    <Button className="btn-regulars w-100" variant="">Details</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default Services;