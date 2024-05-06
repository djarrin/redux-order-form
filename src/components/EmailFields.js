import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { setEmailStateLoading, setEmailStateValid, setEmailStateInValid } from 'redux-resources/actions/emailFieldActions';
import {checkEmail} from 'api-resources/checkEmail';

const EmailFields = () => {
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const dispatch = useDispatch();

    const handleEmail1Change = (event) => {
        const email = event.target.value;
        setEmail1(email);
        
        if (email) {
            dispatch(setEmailStateLoading()); 
            checkEmail(email).then(() => {
                if (email1 === email2) {
                    dispatch(setEmailStateValid());
                    return 
                }
                dispatch(setEmailStateInValid())
            });
        }
    };

    const handleEmail2Blur = (event) => {
        const email = event.target.value;
        setEmail2(email);

        if (email1 !== email2) {
            dispatch(setEmailStateInValid())
            return
        }

        dispatch(setEmailStateValid())
    }

    return (
        <div className='email-fields-container'>
            <label>
                Enter first email:
                <input
                    type="email"
                    value={email1}
                    onChange={handleEmail1Change}
                    placeholder="Enter first email"
                />
            </label>
            <label>
                Enter email again: 
                <input
                    type="email"
                    value={email2}
                    onChange={(event) => setEmail2(event.target.value)}
                    onBlur={handleEmail2Blur}
                    placeholder="Enter email again"
                />
            </label>
        </div>
    )
}

export default EmailFields