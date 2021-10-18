import React from 'react';
import Exparts from '../../Exparts/Exparts';
import Banner from '../Banner/Banner';
import ClassSchedule from '../ClassSchedule/ClassSchedule';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ClassSchedule></ClassSchedule>
           <Exparts></Exparts>
        </div>
    );
};

export default Home;