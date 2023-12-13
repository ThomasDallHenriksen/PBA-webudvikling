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
                <div className="dropdown-container">
                    <div className="dropdown">
                        <label htmlFor="dropdown1">Class: Bits (3..0)</label>
                        <select id="dropdown1" name="dropdown1">
                            <option value="option1">Undefined</option>
                            <option value="option2">class 0</option>
                            <option value="option3">class 1</option>
                            <option value="option3">class 2</option>
                            <option value="option3">class 3</option>
                            <option value="option3">class 4</option>
                            <option value="option3">class 5</option>
                            <option value="option3">class 6</option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <label htmlFor="dropdown2">UA type</label>
                        <select id="dropdown2" name="dropdown2">
                            <option value="option1">Undefined</option>
                            <option value="option1">0: None or not declared</option>
                            <option value="option2">1: Aeroplane or fixedwing</option>
                            <option value="option3">2: Helicoper or multirotor</option>
                            <option value="option3">3: Gyroplane</option>
                            <option value="option3">4: Hybrid lift (fixed wing aircraft)</option>
                            <option value="option3">5: Ornithopter</option>
                            <option value="option3">6: Glider</option>
                            <option value="option3">7: Kite</option>
                            <option value="option3">8: Free balloon</option>
                            <option value="option3">9: Captive balloon</option>
                            <option value="option3">10: Airship (such as a blimp)</option>
                            <option value="option3">11: Free fall/parachute(unpowered)</option>
                            <option value="option3">12: Rocket</option>
                            <option value="option3">13: Tethered power aircraft</option>
                            <option value="option3">14: Ground obstacle</option>
                            <option value="option3">15: Other</option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <label htmlFor="dropdown3">UAS ID Type</label>
                        <select id="dropdown3" name="dropdown3">
                            <option value="option1">Undefined</option>
                            <option value="option1">1. serial number;</option>
                            <option value="option2">2. registration ID; or</option>
                            <option value="option3">3. UTM UUID;</option>
                            <option value="option3">4. specfici session ID</option>

                        </select>
                    </div>
                </div>
                <Link to="/Addairplate">
                    <button className="next-button">Back</button>
                </Link>
                <Link to="/">
                    <button className="next-button">Submit</button>
                </Link>
            </div>
        </div>
    );
};

export default Adddrone;