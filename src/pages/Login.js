import React, { useState } from 'react';

localStorage.setItem('username', "alexander");
localStorage.setItem('password', "alex123");

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(true);
    const [passworderror, setPassworderror] = useState(true);


    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'username':
                value !== '' ? setUsernameError(false) : setUsernameError(true)
                setUsername(value);
                break;
            case 'password':
                value !== '' ? setPassworderror(false) : setPassworderror(true)
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        (username !== storedUsername && password !== storedPassword) ?
            alert('Please provide correct username and password!!')
            : props.updateLoginStatus();
        console.log('You have provided correct username and password.')
    }

    return (
        <div className="[ container ] [ login ]">
            <div className=" [ row ] ">
                <div className="[ col-sm-2 ]"></div>
                <div className=" [ col-sm-9 ] [ login__container ]">
                    <h1>Login</h1>
                    <p className="[ login__container--text ]">This is private property - you must have retained Username & Password from Master - Please contact admin if any issues.</p>
                    <form onSubmit={handleSubmit}>
                        <p>Enter a username</p>
                        <input type='text'
                            name='username'
                            onChange={handleChange}
                            className="[ form-control ]"
                        />
                        <p className={(usernameError) ? 'error' : 'error__hide'}>Please enter correct username.</p>
                        <br />
                        <p>Enter a password</p>
                        <input type='password'
                            name='password'
                            onChange={handleChange}
                            className="[ form-control ] "
                        />
                        <p className={(passworderror) ? 'error' : 'error__hide'}>Please enter correct password.</p>
                        <br />
                        <input type="submit" disabled={usernameError || passworderror} className=" [ btn ] " />
                    </form>
                    <p className="[ login__container--copyright ]">&copy;2020. Property of Alexander Sem Borrmann<br />All rights Reserved</p>
                </div>
            </div>
        </div>
    )
}




