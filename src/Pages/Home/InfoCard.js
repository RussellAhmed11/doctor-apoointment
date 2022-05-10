import React from 'react';

const InfoCard = ({ img ,cardTitle,bgClass,details}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'><img src={img}/></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;