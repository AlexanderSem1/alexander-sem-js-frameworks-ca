
import React, { useState } from 'react';

export default function Contact() {
    //eslint-disable-next-line
    const [name, setName] = useState(true);
    const [firstnameerror, setFirstnameerror] = useState(true);
    const [surnameerror, setSurnameerror] = useState(true);
    const [emailerror, setEmailerror] = useState(true);
    const [phonenumbererror, setPhonenumbererror] = useState(true);


    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPatter = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
        let phonePattern = /^[0-9]{8}$/;

        switch (name) {
            case 'firstname':
                value !== '' ? setFirstnameerror(false) : setFirstnameerror(true)
                break;
            case 'surname':
                value !== '' ? setSurnameerror(false) : setSurnameerror(true)
                break;
            case 'email':
                emailPatter.test(value) ? setEmailerror(false) : setEmailerror(true)
                break;
            case 'phonenumber':
                phonePattern.test(value) ? setPhonenumbererror(false) : setPhonenumbererror(true)
                break;
            default:
                break;
        }
        setName(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for contacting us, we will get back to you shortly!")
    }

    return (
        <div className="[ row container-fluid ]">
            <div className="[ col-sm-3 ]"></div>
            <div className="[ col-sm-6 ]">
                <h1>Contact Form</h1>
                <form onSubmit={handleSubmit}>
                    <p>Enter your Firstname</p>
                    <input type="text"
                        name='firstname'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(firstnameerror) ? 'error' : 'error__hide'}>Please enter valid firstname.</p>
                    <br />
                    <p>Enter your Lastname</p>
                    <input type="text"
                        name='surname'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(surnameerror) ? 'error' : 'error__hide'}>Please enter valid lastname.</p>
                    <br />
                    <p>Enter your email</p>
                    <input type="text"
                        name='email'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(emailerror) ? 'error' : 'error__hide'}>Please enter valid email address.</p>
                    <br />
                    <p>Phonenumber</p>
                    <input type="number"
                        name='phonenumber'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(phonenumbererror) ? 'error' : 'error__hide'}>Please enter valid number.</p>
                    <br />
                    <input type="submit" disabled={firstnameerror || surnameerror || emailerror || phonenumbererror} className="[ btn ]" />
                </form>
            </div>
        </div>
    )
}



