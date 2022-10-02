import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirts();

    const [cart, setCart] = useState([]);


    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id == selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else {
            alert('T-Shirt already exist')
        }

    }

    const removeFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-containetr">
                {
                    tshirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }


            </div>
            <div className="cart-container">

                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;