import React from 'react';
import doctor from "../../assets/images/doctor.png"
import apooinment from "../../assets/images/appointment.png"
import PrimarButton from '../Shared/PrimarButton';

const MakeApooinment = () => {
    return (
        <section style={{
            background:`url(${apooinment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div> 
            <div className='flex-1 p-3'>
                <h3 className="text-primary text-xl">Apoointment</h3>
                <h2 className='text-white font-bold'>Make Apoointmemt</h2>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimarButton>Get Started</PrimarButton>
            </div>
        </section>
    );
};

export default MakeApooinment;