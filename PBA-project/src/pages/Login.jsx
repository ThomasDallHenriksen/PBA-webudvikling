import React, { useState } from 'react';
import axios from 'axios';
import * as bcrypt from 'bcryptjs';
import '../assets/styles/account.scss';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Tilføjet denne linje
    const [userName, setUserName] = useState('');  // Tilføjet denne linjeq

    const handleLogin = async (e) => {
        e.preventDefault();

        const hashedPassword = bcrypt.hashSync(password, 10);

        console.log('login attempt:', {email, password});
    
        try {
            console.log('Login attempt:', { email, password }); // Tilføj denne linje for at logge login-forsøget
    
            const response = await axios.post('https://kienzhe.dk/backend/contactForm.php', {
                email: email,
                password: hashedPassword,
            });
    
            console.log('Login response:', response.data); // Tilføj denne linje for at logge responsen fra serveren
    
            if (response.data.success) {
                setIsLoggedIn((prev) => !prev);
                setUserName(response.data.userName);
    
                sessionStorage.setItem('user', response.data.message);
                sessionStorage.setItem('userName', response.data.userName);
    
                console.log('Login successful');
                console.log('IsLoggedIn:', isLoggedIn);
                console.log('UserName:', userName);
    
                window.location.reload();
            } else {
                console.error('Login failed:', response.data.message || 'Unknown error');
                console.log('Full error response:', response);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };

    return (
        <div className="signup">
            <div className="column column1">
                <div className="content text-to-hide">
                    <h2>A search function where one can view historical data of their own AirPlates on the AirMap. This history search can only be accessed by using a login.</h2>
                </div>
                <div className="globe-container">
                    <div className="globe">
                        <img className="globeimg" src="images/bigglobe.png" alt="Globe" />
                    </div>
                </div>
            </div>
            <div className="column">
                <h2 className="headline">Login</h2>
                <div className="input-column">
                    <input 
                        type="text"
                        placeholder="E-mail Address"
                        className="underline-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="underline-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="forgotpsw">
                    <a href='/'>Glemt kodeord?</a>
                </div>
                <div className="test">
                    <button onClick={handleLogin} className="newacc">
                        Login
                    </button>
                </div>
                <div className="container">
                    <div className="account">Don't have an account?</div>
                    <div className="login">
                        <a href='/signup'>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
