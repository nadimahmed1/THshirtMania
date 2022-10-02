import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h3>MySelf</h3>
            <h6>House: {house}</h6>
            <Special></Special>
        </div>
    );
};

export default MySelf;