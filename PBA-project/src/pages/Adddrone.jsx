import '../assets/styles/add.scss';
import { Link } from 'react-router-dom';


const Adddrone = () => {
    return (
        <div className="block">
            <div className="top">
                <h1 className='top_text'>Add drone for your AirPlate</h1>
                <h2 className='bottom_text'>If you already have a drone ready to connect to your AirPlate, you can add it below. If you don't have a drone yet, you can always add it later to your AirPlate.</h2>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    className="serial-input"
                    placeholder="Serial number..."
                />
                <Link to="/">
                    <button className="next-button">Next</button>
                </Link>
                <Link to="/Addairplate">
                    <button className="next-button">Back</button>
                </Link>
            </div>
        </div>
    );
};

export default Adddrone;