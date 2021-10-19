import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import contactImg from '../../assets/images/dc2.png'
import Slide from 'react-reveal/Slide';
const Contact = () => {
    return (
        <div className="contact">
            <div className="row mb-5 w-100">
                <div className="col-md-4">
                    <Slide left cascade>
                        <div>
                            <img className="w-100" src={contactImg} alt="" />
                        </div>
                    </Slide>
                </div>
                <div className="col-md-8 mt-2">
                    <Slide right cascade>
                        <div>
                            <h2 style={{ color: "#fff", fontWeight: "bold", fontSize: "40px" }} className="text-center">Contact <span>Us</span></h2>
                            <p className="text-center">You can easily reach us through filling up the form</p>
                            <div>
                                <Container>
                                    <Form>
                                        <Row>
                                            <Col sm>
                                                <Form.Group className="mb-3" controlId="formBasicText">
                                                    <Form.Label>Your Email: </Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Your Email" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Your Password: </Form.Label>
                                                    <Form.Control type="email" placeholder="Enter Your Password" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Control
                                            className="my-3"
                                            type="text"
                                            placeholder="Write Your Services Name if You Want..."
                                        />
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Your Messages:</Form.Label>
                                            <Form.Control
                                                placeholder="Write you message..."
                                                as="textarea"
                                                rows={3}
                                            />
                                        </Form.Group>
                                        <Button variant="" className="mb-5 btn-regulars" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Container>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Contact;