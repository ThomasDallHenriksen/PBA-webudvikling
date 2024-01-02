import '../assets/styles/guide.scss';

const Guide = () => {
    return (
        <div className="block">
            <div className="element">
                <div className="header-container">

                    <h1>Guide</h1>
                    <div className="flag-container">
                        <a className="flag" href="/Guidedk">
                            <img src="images/denmark.png" alt="Denmark" />
                        </a>
                        <a className="flag" href="/Guideeng">
                            <img src="images/united-kingdom.png" alt="United Kingdom" />
                        </a>
                    </div>
                </div>
                <h2 className='title'>Step 1. Create / Login account</h2>
                <h2 className='bread'>Before you can register a new AirPlate, you must login as a user or create one. Find 'Login' in the top right corner of the browers under the profile icon.</h2>
                <div className="stepone">
                    <img src="images/create-account.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Step 2. Add Airplate</h2>
                <h2 className='bread'>To register a AirPlate, click 'Add Airplate' in the top right of the navigationbar.</h2>
                <div className="stepthree">
                    <img src="images/AddAirplate.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Step 3. Serialnumber registration</h2>
                <h2 className='bread'>On the 'AddAirplate page' you have the oppertunity to register an AirPlate. You must type a valid serialnumber. Find the valid serialnumber in the package that arrived with the AirPlate.</h2>
                <div className="stepthree">
                    <img src="images/SerialNumber.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>(Optional) Step 4. Add drone</h2>
                <h2 className='bread'>On the 'Add drone page' you have the oppertunity to add an drone for one of your registered AirPlates. This is optinal if you haven't gotten a drone yet.</h2>
                <div className="stepthree">
                    <img src="images/AddDrone.png" />
                </div>
            </div>
        </div >
    );
};

export default Guide;