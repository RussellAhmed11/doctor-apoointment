import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';



const BookingModal = ({date,treatment,settreatment}) => {
    const [user, loading, error] = useAuthState(auth);
    const { name, slots, _id } = treatment;
    const formatDate = format(date, "PP")
    const handleSubmitBtn = event => {
        event.preventDefault()
        const slot = event.target?.slot?.value;
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formatDate,
            slot:event.target?.slot?.value,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target?.phone?.value,
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.success){
                    toast(`Apoointment is set, ${formatDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                
                settreatment(null);

            })

        //   to close the modal


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
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;