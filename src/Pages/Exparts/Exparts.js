import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Expert from '../Expert/Expert';

const Exparts = () => {
    const{services} = useAuth()
    return (
        <Container>
            <div>
                <h1 className="text-center text-bold mt-5">EXPERT <span>TRAINERS</span></h1>
                <div>
                    <Row xs={1} md={3} className="g-4 mt-4">
                        {services.slice(6,12).map(expert =><Expert key = {expert.id} expert={expert}></Expert>)}
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Exparts;