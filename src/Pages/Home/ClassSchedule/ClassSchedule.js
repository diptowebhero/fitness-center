import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ClassSchedule = () => {
    return (
        <Container className="mt-5">
            <div>
                <h1 className="text-center text-bold">OUR <span>SCHEDULE</span></h1>
            </div>
            <div>
            <Row className="p-4 mx-auto mt-4 mb-2" xm={12} md={5}>
                    <Col className="text-center"><button className="day-btn">Saturday</button></Col>
                    <Col className="text-center"><button className="day-btn">Sunday</button></Col>
                    <Col className="text-center"><button className="day-btn">Monday</button></Col>
                    <Col className="text-center"><button className="day-btn">Tuesday</button></Col>
                    <Col className="text-center"><button className="day-btn">Wednesday</button></Col>
                </Row>
            </div>
            <div className="mt-4">
                <Row style={{ background: "#ed541d", color: "white", borderRadius: "50px" }} className="p-4 mx-auto mb-2" xm={12} md={4}>
                    <Col className="text-center">Classic Yoga</Col>
                    <Col className="text-center">10am-12pm</Col>
                    <Col className="text-center">Smith</Col>
                    <Col className="text-center">Join Now</Col>
                </Row>
                <Row style={{ background: "#ed541d", color: "white", borderRadius: "50px" }} className="p-4 mx-auto mb-2" xm={12} md={4}>
                    <Col className="text-center">Body Building</Col>
                    <Col className="text-center">10am-12pm</Col>
                    <Col className="text-center">Petter john</Col>
                    <Col className="text-center">Join Now</Col>
                </Row>
                <Row style={{ background: "#ed541d", color: "white", borderRadius: "50px" }} className="p-4 mx-auto mb-2" xm={12} md={4}>
                    <Col className="text-center">Running</Col>
                    <Col className="text-center">8am-12pm</Col>
                    <Col className="text-center">Kazi Fahim</Col>
                    <Col className="text-center">Join Now</Col>
                </Row>
                <Row style={{ background: "#ed541d", color: "white", borderRadius: "50px" }} className="p-4 mx-auto mb-2" xm={12} md={4}>
                    <Col className="text-center">Running Yoga</Col>
                    <Col className="text-center">10am-1pm</Col>
                    <Col className="text-center">Harun </Col>
                    <Col className="text-center">Join Now</Col>
                </Row>
                <Row style={{ background: "#ed541d", color: "white", borderRadius: "50px" }} className="p-4 mx-auto mb-2" xm={12} md={4}>
                    <Col className="text-center">Meditation</Col>
                    <Col className="text-center">11am-12pm</Col>
                    <Col className="text-center">Jack</Col>
                    <Col className="text-center text-bold">Join Now</Col>
                </Row>
            </div>
        </Container>
    );
};

export default ClassSchedule;