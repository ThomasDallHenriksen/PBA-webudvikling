import { useState } from 'react';
import axios from 'axios';
import '../assets/styles/add.scss';
import { Link } from 'react-router-dom';


const Addairplate = () => {
    const [serialNumber, setSerialNumber] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            alert('you must logged in to add a Airplate');
            return;
        }

        try {
            const response = await axios.post('https://kienzhe.dk/backend/addAirplate.php', {
                serialNumber: serialNumber,
            });

            const data = response.data;

            if (data.status === 'succes') {
                window.location.href = '/Adddrone';
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="block">
            <div className="top">
                <h1 className='top_text'>Add new AirPlate</h1>
                <h2 className='bottom_text'>Here you have the opportunity to register your AirPlate for a drone. Enter the provided serial number of your AirPlate in the field below.</h2>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    className="serial-input"
                    placeholder="Serial number..."
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                />
                <Link to="/Adddrone">
                    <button className="next-button" onClick={handleAdd}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export default Addairplate;
