import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Addairplate = () => {
    const [serialNum, setSerialNum] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Check if the user is logged in
        const storedUser = sessionStorage.getItem('user');
        setIsLoggedIn(!!storedUser); // !! converts to a boolean
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            console.log('Must be logged in to add an airplate');
            return;
        }

        try {
            const response = await axios.post('https://kienzhe.dk/backend/user.php', {
            serialNum: serialNum,
            userId: sessionStorage.getItem('userId'),
        });

            const result = response.data;

            if (result.success) {
                console.log('Serial number added successfully');
                setSuccess(true);
            } else {
                console.log('Serial number not found or error adding serial number');
            }
        } catch (error) {
            console.error('Error:', error);

            if (error.response) {
                console.log('Server response:', error.response);
                console.log(`An error occurred: ${error.response.data.message}`);
            } else {
                console.log('An error occurred. Please check the console for more details.');
            }
        }
    };

    const handleSerialNumChange = (e) => {
        setSerialNum(e.target.value);
    };

    return (
        <div className="block">
            <div className="top">
                <h1 className='top_text'>Add new AirPlate</h1>
                <h2 className='bottom_text'>Here you have the opportunity to register your AirPlate for a drone. Enter the provided serial number of your AirPlate in the field below.</h2>
            </div>
            <div className="input-container">
                <form className="input-wrapper" onSubmit={handleAdd}>
                    <input
                        type="text"
                        className="serial-input"
                        placeholder="Serial number..."
                        value={serialNum}
                        onChange={handleSerialNumChange}
                    />
                    <div className="infopic-container">
                        <img
                            className='infopic'
                            src="/images/info-button.png"
                            alt="info-button"
                        />
                        <span className="infopic-text">The serial number is unique and is used to identify the individual AirPlate in our database.</span>
                    </div>
                    <button type="submit">{success ? <Link to="/Adddrone">Next</Link> : 'Next'}</button>
                </form>
                {success && <p>Serial number added successfully!</p>}
            </div>
        </div>
    );
};

export default Addairplate;