import React, {useEffect, useState} from 'react';
import { calcTax } from 'api-resources/calcTax';

const TaxPreviewFields = ({ offerPrice, handler }) => {
    const [tax, setTax] = useState(19);

    useEffect(() => {
        console.log('current price selected: ', offerPrice)
        handler('loading')
        calcTax(offerPrice)
        .then((taxResult) => {
            setTax(Number(taxResult))
            handler('complete')
        });
    }, [offerPrice])

    const formattedPrice = Number(offerPrice);
    const formattedTax = Number(tax);
    const total = formattedPrice + formattedTax;

    return (
        <div className='tax-preview-container'>
            <div className='row'>
                <div className='label'>Price</div>
                <div className='value'>${isNaN(formattedPrice) ? '0.00' : formattedPrice.toFixed(2)}</div>
            </div>
            <div className='row'>
                <div className='label'>Tax</div>
                <div className='value'>${isNaN(formattedTax) ? '0.00' : formattedTax.toFixed(2)}</div>
            </div>
            <div className='divider'></div>
            <div className='row'>
                <div className='label'>Total</div>
                <div className='value'>CAD ${isNaN(total) ? '0.00' : total.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default TaxPreviewFields