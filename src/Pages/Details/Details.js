import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const{serviceId} = useParams();
    const{services} = useAuth()
    console.log(services);
    const exactMacing = services.find(service => service.id === Number(serviceId));
    return (
        <div>
            <h1>Details</h1>
            <h2>name:{exactMacing?.name}</h2>
        </div>
    );
};

export default Details;