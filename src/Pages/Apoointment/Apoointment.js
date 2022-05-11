import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import ApoointmentBanner from './ApoointmentBanner';
import AvailableApoointment from './AvailableApoointment';

const Apoointment = () => {
    const [date, setdate] = useState(new Date());

    return (
        <div>
            <ApoointmentBanner date={date} setdate={setdate}></ApoointmentBanner>
            <AvailableApoointment date={date} setdate={date}></AvailableApoointment>
            <Footer></Footer>
        </div>
    );
};

export default Apoointment;