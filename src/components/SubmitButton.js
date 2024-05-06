import React from "react";
import {useSelector} from 'react-redux';

const SubmitButton = () => {
    const taxStatus = useSelector(state => state.taxReducer.state);
    const emailStatus = useSelector(state => state.emailFieldsReducer.state);

    const isLoading = taxStatus === 'loading' || emailStatus === 'loading';
    const buttonText = isLoading ? "Loading..." : "Complete Purchase";
    const isDisabled = isLoading || emailStatus !== 'valid';

    return (
        <div className="submit-button-container">
            <button disabled={isDisabled}>{buttonText}</button>
        </div>
    );
}

export default SubmitButton