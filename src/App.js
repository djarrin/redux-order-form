import React from 'react';
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
  return (
    <div className="App">
      <Offers />
      <EmailFields />
      <CreditCardFields />
      <BillingAddressFields />
      <TaxPreviewFields />
      <SubmitButton />
    </div>
  );
}

export default connect()(App);
