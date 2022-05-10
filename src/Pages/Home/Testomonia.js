import React from 'react';
import quoite from "../../assets/icons/quote.svg"
import pepole1 from "../../assets/images/people1.png"
import pepole2 from "../../assets/images/people2.png"
import pepole3 from "../../assets/images/people3.png"
import Review from './Review';

const Testomonia = () => {
    const reviews =[
        {
            _id:1,
            name:"Winson Herroy",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"California",
            img:pepole1
        },
        {
            _id:2,
            name:"Winson Herroy",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"California",
            img:pepole2
        },
        {
            _id:3,
            name:"Winson Herroy",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location:"California",
            img:pepole3
        },
    ]
    return (
        <section className='my-5'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary fond-bold">Testimonias</h4>
                    <h2 className='text-3xl'>What ousrs Patient says</h2>
                </div>
                <div>
                    <img src={quoite} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                  reviews.map(review=><Review key={review._id} review={review}></Review>)
              }
            </div>
        </section>
    );
};

export default Testomonia;