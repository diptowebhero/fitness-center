import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Exparts = () => {
    const [experts, setExpert] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(response => response.json())
            .then(data => setExpert(data))
    }, [])
    return (
        <Container>
            <div>
                <h1 className="text-center text-bold mt-5">EXPERT <span>TRAINERS</span></h1>
                <div>
                    <Row xs={1} md={3} className="g-4 mt-4">
                        {experts.slice(6,12).map(expert =><Expert key = {expert.id} expert={expert}></Expert>)}
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Exparts;