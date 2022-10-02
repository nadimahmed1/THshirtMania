import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const RingContext = createContext('Diamond')

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring'

    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h2>GrandPa</h2>
                <button onClick={handleBuyAHouse}>Buy a House</button>
                <p>House: {house}</p>
                <section className='grand'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;