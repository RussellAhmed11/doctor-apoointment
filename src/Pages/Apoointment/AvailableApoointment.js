import { format } from 'date-fns';
import React from 'react';
import {useState,useEffect} from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ApoointmentService from './ApoointmentService';
import BookingModal from './BookingModal';

const AvailableApoointment = ({date}) => {
    const [services,setservices]=useState([]);
    const [treatment,settreatment]=useState(null)
   
    const formattedDate = format(date, 'PP');
   
    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => setservices   (data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-primary font-bold pt-5 text-xl '>Available Apoointment on {format(date,'PP')}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5'>
                {
                    services?.map(service=><ApoointmentService service={service} settreatment={settreatment} key={service._id}></ApoointmentService>)
                }
                {
                    treatment && <BookingModal date={date}
                     treatment={treatment}
                     settreatment={settreatment}
                     ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableApoointment;