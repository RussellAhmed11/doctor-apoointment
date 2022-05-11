import React from 'react';

const ApoointmentService = ({service,settreatment}) => {
    const {name,slots}=service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-lg text-primary-content">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2> 
                <p>{slots.length >0 ? <span>{slots[0]}</span>:<span className='text-red-500 font-bold'>Try Another Day</span>}</p>
                <p>{slots.length} {slots.length >1 ? 'spaces':'space'}  available</p>
                <div class="card-actions justify-end">
                    <label onClick={()=>settreatment(service)} disabled={slots.length ===0} for="bookingModal" class="btn btn-secondary uppercase text-white">Book Apoointment</label>
                </div>
            </div>
        </div>
    );
};

export default ApoointmentService;