import React, { useState, useEffect } from 'react';
import '../assets/styles/add.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Adddrone = () => {
    const [userData, setUserData] = useState(null);
    const [serialNumArray, setSerialNumArray] = useState([]);
    const [selectedSerialNumber, setSelectedSerialNumber] = useState('');
    const [selectedClass, setSelectedClass] = useState('Undefined');
    const [selectedUAType, setSelectedUAType] = useState('Undefined');
    const [selectedClassification, setSelectedClassification] = useState('Undeclared');
    const [success, setSuccess] = useState(false);



    useEffect(() => {
        const storedUserData = sessionStorage.getItem('user');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));

            const userEmail = JSON.parse(storedUserData).email;
            axios.post('https://kienzhe.dk/updates/serieNumber.php', { userEmail })
                .then(response => {
                    console.log(response); 
                    if (response.data.success) {
                        setSerialNumArray(response.data.serialNumArray);
                    } else {
                        console.error(response.data.message);
                    }
                })
                .catch(error => {
                    console.error('error fetching:', error);
                });
        }
    }, []);

    const handleFormSubmit = () => {
        // Check if all required fields are selected
        if (!selectedSerialNumber || selectedClass === 'Undefined' || selectedUAType === 'Undefined' || selectedClassification === 'Undeclared') {
            alert('Please fill in all fields.');
            return;
        }
        const dataToSend = {
            serialNumber: selectedSerialNumber,
            userId: userData.id,
            formatType: selectedClass,
            ua: selectedUAType,
            uas: selectedClassification,
        };
        axios.post('https://kienzhe.dk/updates/drone.php', dataToSend)
            .then(response => {
                console.log(response.data);
                setSuccess(true);
            })
            .catch(error => {
                console.error('Error sending data to backend:', error);
            });
    };
    

    

    return (
        <div className="block">
            <div className="top">
                <h1 className='top_text'>Add drone for your AirPlate</h1>
                <h2 className='bottom_text'>If you already have a drone ready to connect to your AirPlate, you can add it below. If you don't have a drone yet, you can always add it later to your AirPlate.</h2>
            </div>
            <div className="input-container">
                <div className="dropdown">
                    <div className="infopic-container">
                        <div className="input-wrapper2">Serialnumber
                            <img
                                className='infopic'
                                src="/images/info-button.png"
                                alt="info-button"
                            />
                            <span className="infopic-text">Select the serialnumber for the airplate you wish to add.</span>
                        </div>
                    </div>
                    <div className='selectSerial'>
                        <select id='SerialDropdown' value={selectedSerialNumber} onChange={(e) => setSelectedSerialNumber(e.target.value)}>
                            <option value="" disabled selected hidden>Add Airplate</option>
                            {serialNumArray.map((serialNum, index) => (
                                <option key={index} value={serialNum}>{serialNum}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <div className="input-wrapper2">Class
                            <div className="infopic-container">
                                <img
                                    className='infopic'
                                    src="/images/info-button.png"
                                    alt="info-button"
                                />
                                <span className="infopic-text">EU Class label introduced January 1st 2024. This label will be clearly visible on the drone.</span>
                            </div>
                        </div>
                        <select id="dropdown1" name="dropdown1" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} >
                            <option value="undefined">Undefined</option>
                            <option value="class 0">class 0</option>
                            <option value="class 1">class 1</option>
                            <option value="class 2">class 2</option>
                            <option value="class 3">class 3</option>
                            <option value="class 4">class 4</option>
                            <option value="class 5">class 5</option>
                            <option value="class 6">class 6</option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <div className="input-wrapper2">UA type
                            <div className="infopic-container">
                                <img
                                    className='infopic'
                                    src="/images/info-button.png"
                                    alt="info-button"
                                />
                                <span className="infopic-text">What type is your aircraft? If your drone is a quadcopter or similar, choose 2 (Helicopter or multirotor). If the drone is a fixed-wing choose 1 (Aeroplane or fixed wing)</span>
                            </div>
                        </div>
                        <select id="dropdown2" name="dropdown2" value={selectedUAType} onChange={(e) => setSelectedUAType(e.target.value)} >
                            <option value="Undefined">Undefined</option>
                            <option value="None or not declared">0: None or not declared</option>
                            <option value="Aeroplane or fixedwing">1: Aeroplane or fixedwing</option>
                            <option value="Helicoper or multirotor">2: Helicoper or multirotor</option>
                            <option value="Gyroplane">3: Gyroplane</option>
                            <option value="Hybrid lift (fixed wing aircraft">4: Hybrid lift (fixed wing aircraft)</option>
                            <option value="Ornithopter">5: Ornithopter</option>
                            <option value="Glider">6: Glider</option>
                            <option value="Kite">7: Kite</option>
                            <option value="Free balloon">8: Free balloon</option>
                            <option value="Captive balloon">9: Captive balloon</option>
                            <option value="Airship (such as a blimp">10: Airship (such as a blimp)</option>
                            <option value="Free fall/parachute(unpowered)">11: Free fall/parachute(unpowered)</option>
                            <option value="Rocket">12: Rocket</option>
                            <option value="Tethered power aircraft">13: Tethered power aircraft</option>
                            <option value="Ground obstacle">14: Ground obstacle</option>
                            <option value="Other">15: Other</option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <div className="input-wrapper2">Classification
                            <div className="infopic-container">
                                <img
                                    className='infopic'
                                    src="/images/info-button.png"
                                    alt="info-button"
                                />
                                <span className="infopic-text">Specifies the type of data in the UA Category and UA Class fields. Is your drone flying under EASA (EU) rules or not.</span>
                            </div>
                        </div>
                        <select id="dropdown3" name="dropdown3" value={selectedClassification} onChange={(e) => setSelectedClassification(e.target.value)} >
                            <option value="Undeclared">Undeclared</option>
                            <option value="EU">EU</option>
                        </select>
                    </div>
                </div>
                <div className='wrapper-buttons'>
                    <Link to="/Addairplate">
                        <button className="next-button">Back</button>
                    </Link>
                    <Link to="">
                        <button className="next-button" onClick={handleFormSubmit} disabled={!userData}>Submit</button>
                    </Link>
                </div>
                {success && <p>Drone with AirPlate registered successfully!</p>}
            </div>
        </div>
    );
};

export default Adddrone;