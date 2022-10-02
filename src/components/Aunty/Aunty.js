import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [ornament, house] = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <h6>House: {house}</h6>
            <p>Gift: {ornament}</p>
            <p><small>{house}</small></p>
        </div>
    );
};

export default Aunty;