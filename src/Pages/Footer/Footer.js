import React from 'react';
import { Container,Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <Container>
                <div className="row w-100 mx-auto mt-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="mb-4">
                            <Navbar.Brand className="d-flex align-items-center" href="#home">
                                <img
                                    alt=""
                                    src={logo}
                                    className="d-inline-block align-top"
                                />{' '}
                                Fitness Center
                            </Navbar.Brand>
                            <p>Hero you can find our all latest services. Choose some of them and try to grow up your Fitness.</p>
                        </div>
                        <div className="mb-4">
                            <p className="information">INFORMATION</p>
                        </div>
                        <div className='d-flex'>
                            <div className=''>
                                <p>Who we are</p>
                                <p>Get in touch</p>
                                <p>Thing we like</p>
                            </div>
                            <div className='mx-5'>
                                <p>Collaboration</p>
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                            </div>
                            <div>
                                <p>Join as Instructor</p>
                                <p>Resourses</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div>
                            <div className="mb-5">
                                <p className="titles">Follow Us</p>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h4 className="email">hello@fitnessCenter.com</h4>
                                    </div>
                                    <div className="mx-4">
                                        <div className="social-icon">
                                            <i className="fab fa-facebook-f"></i>
                                            <i className="fab fa-linkedin-in"></i>
                                            <i className="fab fa-twitter"></i>
                                            <i className="fab fa-instagram"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="titles">Keep in Touch</p>
                                <div>
                                    <input placeholder="name" type="text" />
                                    <input className='mx-2' placeholder="email" type="text" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="input-group mb-3 w-75 shadow-lg">
                                    <input type="text" className="form-control rounded-3 border-0" placeholder="Leave Your Messege"
                                        aria-label="Recipient's username" />
                                    <button className="btns" type="button" id="button-addon2">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p style={{ fontWeight: "500" }} className="text-center">Copyright © All Reserved by Educafe, 2021</p>
                </div>
            </Container>
            <div>
                <img className="w-100 mx-auto" src="" alt="" />
            </div>
        </div>
    );
};

export default Footer;