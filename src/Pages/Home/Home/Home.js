import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import bgChire from '../../../assets/images/bg.png'
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';
import ContectUs from '../ContectUs/ContectUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <div style={{ backgroundImage: `url(${bgChire})` }}>
            <Banner></Banner>
            <InfoCards></InfoCards>
            </div>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContectUs></ContectUs>
        </div>
    );
};

export default Home;