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
                <h2 className='title'>Step 1. Website</h2>
                <h2 className='bread'>Go to www.airplate.dk/guide or scan the QR-code that comes with the package to continue registration of your new AirPlate.</h2>
                <div className="stepone">
                    <img src="images/airplate.dk-guide.png" />
                    <img src="images/scan-qr.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Step 2. User</h2>
                <h2 className='bread'>To register your new AirPlate, create a new user if you are not already registered. If not, follow the form to create a new user.</h2>
                <div className="stepone">
                    <img src="images/account-circle.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Step 3. Setup </h2>
                <h2 className='bread'>As a user, you have the option to enter the provided serial number on your AirPlate (located on the back of the AirPlate) to register it. Once logged in, this can be done by navigating to: AirMap → Dashboard → Configuration → Add Airplate, and entering the serial number for your AirPlate. Click on submit, and upon providing the correct serial number, it will be registered in the database.</h2>
                <div className="stepthree">
                    <img src="images/airmap-circle.png" />
                    <img src="images/dashboard-circle.png" />
                    <img src="images/configuration-circle.png" />
                    <img src="images/addairplate-circle.png" />
                    <img src="images/serialnumber-circle.png" />
                </div>
            </div>
        </div >
    );
};

export default Guide;