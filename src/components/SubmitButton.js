import React from "react";

const SubmitButton = ({emailState, taxState}) => {

    const isLoading = taxState === 'loading' || emailState === 'loading';
    const buttonText = isLoading ? "Loading..." : "Complete Purchase";
    const isDisabled = isLoading || emailState !== 'valid';

    return (
        <div className="submit-button-container">
            <button disabled={isDisabled}>{buttonText}</button>
        </div>
    );
}

export default SubmitButton