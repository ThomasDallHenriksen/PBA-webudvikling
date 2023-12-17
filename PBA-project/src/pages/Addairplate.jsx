import React, { useState } from 'react';
import '../assets/styles/add.scss';
import { Link } from 'react-router-dom';

const Addairplate = () => {

    const [serialNumber, setSerialNumber] = useState('');

    const checkAirplate = async () => {
        try {
            const response = await fetch('https://kienzhe.dk/backend/addAirplate.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ serialNumber }),
            });

            const result = await response.json();

            if (result.status === 'success') {
                // Handle success, e.g., show a success message to the user
                console.log('AirPlate added successfully');
            } else if (result.status === 'not_found') {
                // Handle case where the serial number is not found
                console.log('Serial number not found');
            } else {
                // Handle other errors
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    return (
        <div className="block">
            <div className="top">
                <h1 className='top_text'>Add new AirPlate</h1>
                <h2 className='bottom_text'>Here you have the opportunity to register your AirPlate for a drone. Enter the provided serial number of your AirPlate in the field below.</h2>
            </div>
            <div className="input-container">
                <form className="input-wrapper" onSubmit={checkAirplate}>
                    <input
                        type="text"
                        className="serial-input"
                        placeholder="Serial number..."
                    />
                    <div className="infopic-container">
                        <img
                            className='infopic'
                            src="/images/info-button.png"
                            alt="info-button"
                        />
                        <span className="infopic-text">The serial number is unique and is used to identify the individual AirPlate in our database.</span>
                    </div>
                <Link to="/Adddrone">
                    <button className="next-button">Next</button>
                </Link>
                </form>
            </div>
        </div>
    );
};

export default Addairplate;
