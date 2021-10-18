import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Services = ({ service }) => {
    const { img, name, desc } = service
    return (
        <Col>
            <Card className="p-2 border-0 shadow">
                <Card.Img  style={{height:"250px",borderRadius:"5px"}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc.slice(0,100)}
                    </Card.Text>
                </Card.Body>
                <Button className="btn-regulars" variant="">Details</Button>
            </Card>
        </Col>
    );
};

export default Services;