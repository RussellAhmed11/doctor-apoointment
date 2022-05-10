import React from 'react';
import Service from './Service';
import fluorid from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {
    const services=[
        {
            _id:1,
            name:"Fluoried Treatment",
            description:"",
            img:fluorid
        },
        {
            _id:2,
            name:"Cavity Treatment",
            description:"",
            img:cavity
        },
        {
            _id:3,
            name:"Whiitening Treatment",
            description:"",
            img:whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary font-bold text-xl uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;