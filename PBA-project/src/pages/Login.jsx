import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/account.scss';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://kienzhe.dk/backend/login.php', {
              email: email,
              password: password,
            });
      
            if (response.data.success) {
                // Redirect to a new page or perform other actions upon successful login
                console.log('Login successful');
                sessionStorage.setItem('user', JSON.stringify (response.data.user));
                sessionStorage.setItem('userName', response.data.userName);
                console.log('login successful');
                console.log('isLoggedIn:', response.data.isLoggedIn);
                console.log('userName:', response.data.isLoggedIn);

                // Redirect to the profile page
                window.location.href = '/profile';

              
            } else {
              // Handle login failure
              console.error('Login failed:', response.data.message);
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
