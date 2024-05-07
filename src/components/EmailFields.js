import React, {useState} from 'react';
import { checkEmail } from 'api-resources/checkEmail';

const EmailFields = ({ handler }) => {
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');

    const handleEmail1Change = (event) => {
        const email = event.target.value;
        setEmail1(email);
        
        if (email) {
            handler('loading')
            checkEmail(email).then(() => {
                if (email1 === email2) {
                    handler('valid')
                    return 
                }
                handler('invalid')
            });
        }
    };

    const handleEmail2Blur = (event) => {
        const email = event.target.value;
        setEmail2(email);

        if (email1 !== email2) {
            handler('invalid')
            return
        }

        handler('valid')
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