import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment ,settreatment}) => {
    const { name, slots } = treatment;
    const handleSubmitBtn=event=>{
           event.preventDefault()
          const slot=event.target.value;
          console.log(slot)
          settreatment(null) 
    }
    return (
        
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-secondary">Booking for:{name}</h3>
                    <label for="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmitBtn} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number' placeholder="Numper" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;