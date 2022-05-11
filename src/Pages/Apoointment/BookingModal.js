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
            <input type="checkbox" id="bookingModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-secondary">Booking for:{name}</h3>
                    <label for="bookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmitBtn} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number' placeholder="Numper" class="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="bookingModal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;