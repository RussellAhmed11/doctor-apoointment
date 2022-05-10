import React from 'react';

const PrimarButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white fw-bold bg-gradient-to-r from-secondary to-primary ">{children}</button>
        </div>
    );
};

export default PrimarButton;