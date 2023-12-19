import '../assets/styles/guide.scss';

const Guide = () => {
    return (
        <div className="block">
            <div className="element">
                <div className="header-container">
                    <h1 className='guide'>Guide</h1>
                    <div className="flag-container">
                        <a className="flag" href="/Guidedk">
                            <img src="images/denmark.png" alt="Denmark" />
                        </a>
                        <a className="flag" href="/Guideeng">
                            <img src="images/united-kingdom.png" alt="United Kingdom" />
                        </a>
                    </div>
                </div>
                <h2 className='title'>Step 1. Hjemmeside</h2>
                <h2 className='bread'>Gå til www.airplate.dk/guide eller scan QR-koden som medfølger i pakken for at komme i gang med opsætning af din nye AirPlate.</h2>
                <div className="stepone">
                    <img src="images/airplate.dk-guide.png" />
                    <img src="images/scan-qr.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Step 2. Bruger</h2>
                <h2 className='bread'>For at registrere din nye AirPlate, skal du oprette en ny bruger hvis du ikke allerede er registreret som nuværende, dermed log in. Hvis ikke, følg formularen for at oprette ny bruger.</h2>
                <div className="stepone">
                    <img src="images/account-circle.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Step 3. Opsætning </h2>
                <h2 className='bread'>Som bruger har du mulighed for at indtaste det medfølgende serienummer på din AirPlate(bagsiden af AirPlate) for at registrere den. Når du er logget ind, sker dette ved at gå til; AirMap → Dashboard → Configuration → Add Airplate og her indtastes serienummeret til din AirPlate. Klik på submit, hvor efter ved korrekt oplyst serienummer bliver den registreret i databasen.</h2>
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