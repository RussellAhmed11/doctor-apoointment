import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           <InfoCard cardTitle="Oprning Hours" bgClass="bg-gradient-to-r from-secondary to-primary" details="Lorem Ipsum is simply dummy text of the pri" img={clock}></InfoCard>
           <InfoCard cardTitle="Ours Location" details="Brooklyn, NY 10036, United States" bgClass="bg-[#3A4256]" img={marker}></InfoCard>
           <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" details="+000 123 456789" img={phone}></InfoCard>
        </div>
    );
};

export default Info;