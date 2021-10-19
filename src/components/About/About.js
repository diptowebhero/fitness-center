import React from 'react';
import { Container } from 'react-bootstrap';
import aboutImg from '../../assets/images/about-right-img.png'
const About = () => {
    return (
        <Container className="mt-5">
            <h1 style={{ fontWeight: "700", fontSize: "50px" }} className="text-center mb-5">About <span>Fitness Center</span></h1>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div>
                        <h2><span>What we do</span></h2>
                        <p style={{ textAlign: "justify", marginRight: "5rem" }}>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs</p>
                    </div>
                    <div>
                        <h2><span>Culture</span></h2>
                        <p style={{ textAlign: "justify", marginRight: "5rem" }}>At Gym and Fitness, we believe that building a positive
                            culture is incredibly important. The business is underpinned
                            by six core values which speak of our commitment to our customers, staff, the industry and our business as a whole. We believe in encouraging, supporting, challenging, learning and growing to be the best. At Gym and Fitness, every morsel of feedback is a nugget of shiny gold because it gives us the opportunity to provide the best customer experience</p>
                    </div>
                    <div>
                        <h2><span>Customer Service</span></h2>
                        <p style={{ textAlign: "justify", marginRight: "5rem" }}>Customers are at the centre of what we do and why we do it! We have a team of knowledgeable sales representatives who are ready to assist you with your gym equipment needs. Our crew will be able to answer your questions from honest product information to the best way to integrate a piece of equipment into your workout routine. We work hard to ensure we have strong relationships with our suppliers, bringing you the best possible prices in the industry. In fact, if you find a better price on one of our core range of products, we will match it as a part of our brand promises.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img fluid w-100" src={aboutImg} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default About;