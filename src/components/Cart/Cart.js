import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeFromCart }) => {
    // conditional rendering option
    // 1 element variable
    // 2. ternary operator ? true : false
    // 3. && operator
    // 4. || Or operator
    let command;
    if (cart.length == 0) {
        command = <p> ekta kicu to add korosna beda</p>
    }
    else if (cart.length == 1) {
        command = <p>vai aro kicu add korosna</p>
    }
    else {
        command = <p><small>Add korar jonno donnobad</small></p>
    }
    return (
        <div>
            <h3>Items selected: {cart.length}</h3>

            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => removeFromCart(tShirt)}>X</button>
                </p>)
            }
            {/* 3. && operator */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigional</h3>
                <p>tin jon ke ki gift diba</p>
            </div>}
            {cart.length === 4 && <div className=''>
                <p><button className='orange'>Remove all</button></p>
            </div>}
            {/* 4. || operator */}
            {cart.length === 0 || <div className='orange'>
                <p>YaY!! tumi akon kicu kinte paro!!</p>
            </div>}
            {/* 1. element variable */}
            {command}
            {/* nicer ta holo ternary operator ar udahoron */}
            {cart.length !== 4 ? <p>3 ta add koro</p> : <p><button>Besi hoice</button></p>}
        </div>
    );
};

export default Cart;