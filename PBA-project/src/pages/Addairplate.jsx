import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/styles/add.scss';

const Addairplate = () => {
    const [serialNum, setSerialNum] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        console.log('Stored User:', storedUser);
        setIsLoggedIn(!!storedUser);
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            console.log('Must be logged in to add an airplate');
            return;
        }

        const storedUser = JSON.parse(sessionStorage.getItem('user'));
        const userId = storedUser.id;

        console.log('Extracted userId:', userId);

        try {
            const response = await axios.post('https://kienzhe.dk/updates/addAirplate.php', {
                serialNum: serialNum,
                userId: userId,
            });

            console.log('Backend response:', response.data);

            const result = response.data;

            if (result.success) {
                console.log('Serial number added successfully');
                setSuccess(true);
            } else {
                alert('Serial number not found or error adding serial number');
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
                    <button className='addButton' type="submit">{success ? <Link to="/Adddrone">Next</Link> : 'Submit'}</button>
                </form>
                <div className="container">
                    <div className="account">Have you already registered a Airplate?</div>
                    <div className="login">
                        <a href='/adddrone'>Connect drone</a>
                    </div>
                </div>
                {success && <p>Serialnumber added successfully!</p>}
            </div>
        </div>
    );
};

export default Addairplate;