import { useState } from 'react';
import axios from 'axios';
import '../assets/styles/add.scss';
import { Link } from 'react-router-dom';

const Addairplate = () => {
    const [serialNumber, setSerialNumber] = useState('');
    const isLoggedIn = sessionStorage.getItem('user');

    const handleAdd = async (e) => {
        e.preventDefault();
    
        if (!isLoggedIn) {
            alert('must be logged in to add an airplate');
            return;
        }
    
        try {
            console.log('Sending Serial Number to server:', serialNumber);
    
            const response = await axios.post(import.meta.env.VITE_AIRPLATE_ROUTE, {
                serialNumber: serialNumber,
            });
    
            console.log('Server Response:', response.data);
    
            const data = response.data;
    
            if (data.status === 'success') {
                alert('serial number added');
            } else if (data.status === 'not found') {
                alert('not found');
            } else {
                alert('error adding number');
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
                <div className="input-wrapper">
                    <input
                        type="text"
                        className="serial-input"
                        placeholder="Serial number..."
                        value={serialNumber}
                        onChange={(e) => setSerialNumber(e.target.value)}
                    />
                    <div className="infopic-container">
                        <img
                            className='infopic'
                            src="/images/info-button.png"
                            alt="info-button"
                        />
                        <span className="infopic-text">The serial number is unique and is used to identify the individual AirPlate in our database.</span>
                    </div>
                </div>
                <Link to="/Adddrone">
                    <button className="next-button" onClick={handleAdd}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export default Addairplate;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/styles/add.scss';
// import { Link } from 'react-router-dom';

// const Addairplate = () => {
//     const [serialNumber, setSerialNumber] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const user = sessionStorage.getItem('user');
//         setIsLoggedIn(!!user);
//     }, []);

//     const handleAdd = async (e) => {
//         e.preventDefault();

//         if (!isLoggedIn) {
//             alert('you must logged in to add a Airplate');
//             return;
//         }

//         try {
//             const response = await axios.post(import.meta.env.VITE_AIRPLATE_ROUTE, {
//                 serialNumber: serialNumber,
//             });

//             const data = response.data;

//             if (data.status === 'success') {
//                 window.location.href = '/Adddrone';
//             } else {
//                 alert(data.message);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             console.error('Server response:', error.response);
//             console.error('Server response:', error.response); // Log the response for more details
//         console.error('Server data:', error.response?.data); // Log the response data
//         console.error('Server status:', error.response?.status); // Log the response status
//         }
//     };

//     return (
//         <div className="block">
//             <div className="top">
//                 <h1 className='top_text'>Add new AirPlate</h1>
//                 <h2 className='bottom_text'>Here you have the opportunity to register your AirPlate for a drone. Enter the provided serial number of your AirPlate in the field below.</h2>
//             </div>
//             <div className="input-container">

//                 <div className="input-wrapper">
//                     <input
//                         type="text"
//                         className="serial-input"
//                         placeholder="Serial number..."
//                         value={serialNumber}
//                     onChange={(e) => setSerialNumber(e.target.value)}
//                     />
//                     <div className="infopic-container">
//                         <img
//                             className='infopic'
//                             src="/images/info-button.png"
//                             alt="info-button"
//                         />
//                         <span className="infopic-text">The serial number is unique and is used to identify the individual AirPlate in our database.</span>
//                     </div>
//                 </div>
//                 <Link to="/Adddrone">
//                     <button className="next-button" onClick={handleAdd}>Next</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Addairplate;

