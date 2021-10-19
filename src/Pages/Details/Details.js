import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Slide from 'react-reveal/Slide';

const Details = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();
    console.log(services);
    const exactMacing = services.find(service => service.id === Number(serviceId));
    const { img, name, desc, trainerImg, trainer } = exactMacing;
    return (
        <div>
            <Container className="mt-5 w-100 mx-auto">
                <div className="row">
                    <Slide left cascade>
                        <div className="col-md-6">
                            <img className="w-100 rounded" style={{ height: "300px" }} src={img} alt="" />
                        </div>
                    </Slide>
                    <Slide right cascade>
                        <div className="col-md-6">
                            <div className="mx-1">
                                <h2>{name}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className="my-2">
                                <img style={{ width: "150px", height: "150px", border: "2px solid", borderRadius: "100%" }} src={trainerImg} alt="" />
                                <h5 className="">Trainer :{trainer}</h5>
                            </div>
                        </div>
                    </Slide>
                </div>
            </Container>
        </div>
    );
};

export default Details;