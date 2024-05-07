import React, { useState } from 'react';
import 'assets/styles/bootstrap-grid.min.css';
import 'App.scss';
import {connect} from 'react-redux';
import Offers from 'components/Offers';
import SubmitButton from 'components/SubmitButton';
import TaxPreviewFields from 'components/TaxPreviewFields';
import BillingAddressFields from 'components/BillingAddressFields';
import CreditCardFields from 'components/CreditCardFields';
import EmailFields from 'components/EmailFields';

function App() {
  const [values, setValues] = useState({
    offerName: 'Offer 1',
    price: 199,
    emailState: 'empty',
    taxState: 'complete'
  })

  const handleChange = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      setValues(prevValues => ({
        ...prevValues,
        ...value
      }));
    } else {
      setValues(prevValues => ({
        ...prevValues,
        [key]: value
      }));
    }
  };

  return (
    <div className="App">
      <Offers 
        handler={(offer) => handleChange(null, offer)} 
      />
      <EmailFields 
        handler={(state) => handleChange('emailState', state)}
      />
      <CreditCardFields />
      <BillingAddressFields />
      <TaxPreviewFields 
        offerPrice={values.price}
        handler={(state) => handleChange('taxState', state)} 
      />
      <SubmitButton 
        emailState={values.emailState}
        taxState={values.taxState}
      />
    </div>
  );
}

export default App;
