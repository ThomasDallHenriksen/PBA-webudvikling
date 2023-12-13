import React, { useState } from 'react';
import axios from 'axios';

import '../assets/styles/account.scss';

const Signup = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    organisation: '',
    account_type: 'private'
  });

  const handleSignup = async() => {
    try{
        const response = await axios.post('http://kienzhe.dk/backend/login.php', userData, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        console.log(response.data);

    }catch (error){
        console.error('Fejl:', error);
    }
    
};

// const handleChange = (e) => {
//     setUserData({
//         ...userData,
//         [e.target.name]: e.target.value,
//     })
// };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const transformedFormData = {
//         first_name: formData.firstName,
//         last_name: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//       };

//       try {
//         const response = await axios.post('http://kienzhe.dk/backend/login.php', transformedFormData);
    
//         if (response.status === 200) {
//           // Handle successful registration
//           console.log('User registered successfully');
//         } else {
//           // Handle registration failure
//           console.error('Registration failed with status:', response.status);
//           console.error('Response data:', response.data);
//         }
//       } catch (error) {
//         console.error('Error during registration:', error);
//       }
//   };

    return (
        <div className="signup">
            <div className="column column1">
                <div className="content text-to-hide">
                    <h2>A search function where one can view historical data of their own AirPlates on the AirMap. This history search can only be accessed by using a login.</h2>
                </div>
                <div className="globe-container">
                    <div className="globe">
                        <img src="images/bigglobe.png" alt="Globe" />
                    </div>
                </div>
            </div>
            <div className="column">    

                <form className='input-column' onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="First name"
                        className="underline-input"
                        name="first_name"
                        value={userData.first_name}
                        onChange={(e) => setUserData({...userData, first_name: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        className="underline-input"
                        name="last_name"
                        value={userData.last_name}
                        onChange={(e) => setUserData({...userData, last_name: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="underline-input"
                        name='phone'
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="underline-input"
                        name="email"
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                    />


                    <select
                        name="" 
                        id=""
                        value={userData.account_type}
                        onChange={(e) => setUserData({...userData, account_type: e.target.value})}
                    >
                        <option value="private">Private</option>
                        <option value="organisation">Organisation</option>
                    </select>

                    {userData.account_type === 'organisation' && (
                        <input
                            type="text"
                            placeholder="Organization Name"
                            className="underline-input"
                            name="organisation"
                            value={userData.organization}
                            onChange={(e) => setUserData({ ...userData, organization: e.target.value })}
                        />
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        className="underline-input"
                        name="password"
                        value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                    />
            <div className="column">
                
                <div className="test">
                    <a type='submit' href="#" className="newacc">Create Account</a>
                </div>
                <div className="container">
                    <div className="account">Already have an account?</div>
                    <div className="login">
                        <a href='/login'>Log in</a>
                    </div>
                </div>
            </div>
                </form>
        </div>
        </div>

    );
}

export default Signup;
