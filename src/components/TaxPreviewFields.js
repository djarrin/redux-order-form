import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { calcTax } from 'api-resources/calcTax';
import { setTaxCalculated, setTaxLoading } from 'redux-resources/actions/taxPreviewActions';

const TaxPreviewFields = () => {
    const price = useSelector(state => state.offerReducer.price)
    const [tax, setTax] = useState(19);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('current price selected: ', price)
        dispatch(setTaxLoading())
        calcTax(price)
        .then((taxResult) => {
            setTax(Number(taxResult))
            dispatch(setTaxCalculated()); 
        });
    }, [price])

    const formattedPrice = Number(price);
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