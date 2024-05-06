import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { setOffer } from "redux-resources/actions/offersActions";


const Offers = () => {
    const offers = [
        'Offer 1 | 199',
        'Offer 2 | 299'
    ]

    const [selectedOption, setSelectedOption] = useState(offers[0]);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        const [offerName, price] = event.target.value.split('|').map(part => part.trim())
        console.log(`offerName: ${offerName}`);
        console.log(`price: ${price}`);
        dispatch(setOffer({offerName, price}))
    };

    
    return (
        <div className="offers-container">
            <label>
                <input
                type="radio"
                value={offers[0]}
                checked={selectedOption === offers[0]}
                onChange={handleChange}
                />
                Offer 1 $199 
            </label>
            <label>
                <input
                type="radio"
                value={offers[1]}
                checked={selectedOption === offers[1]}
                onChange={handleChange}
                />
                Offer 2 $299
            </label>
        </div>
    )

}

export default Offers