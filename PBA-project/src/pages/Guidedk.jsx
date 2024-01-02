import '../assets/styles/guide.scss';

const Guide = () => {
    return (
        <div className="block">
            <div className="element">
                <div className="header-container">

                    <h1>Guide</h1>
                    <div className="flag-container">
                        <a className="flag" href="/Guidedk">
                            <img src="images/denmark.png" alt="Danmark" />
                        </a>
                        <a className="flag" href="/Guideeng">
                            <img src="images/united-kingdom.png" alt="Storbritannien" />
                        </a>
                    </div>
                </div>
                <h2 className='title'>Trin 1. Opret / Log ind på konto</h2>
                <h2 className='bread'>Før du kan registrere en ny AirPlate, skal du logge ind som bruger eller oprette en. Find 'Log ind' i øverste højre hjørne af browseren under profilikonet.</h2>
                <div className="stepone">
                    <img src="images/create-account.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Trin 2. Tilføj Airplate</h2>
                <h2 className='bread'>For at registrere en AirPlate skal du klikke på 'Tilføj Airplate' øverst til højre i navigationsbjælken.</h2>
                <div className="stepthree">
                    <img src="images/AddAirplate.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>Trin 3. Registrering af serienummer</h2>
                <h2 className='bread'>På siden 'Tilføj Airplate' har du mulighed for at registrere en AirPlate. Du skal indtaste et gyldigt serienummer. Find det gyldige serienummer i pakken, der kom med AirPlaten.</h2>
                <div className="stepthree">
                    <img src="images/SerialNumber.png" />
                </div>
            </div>
            <div className='element'>
                <h2 className='title'>(Valgfrit) Trin 4. Tilføj drone</h2>
                <h2 className='bread'>På siden 'Tilføj drone' har du mulighed for at tilføje en drone til en af dine registrerede AirPlates. Dette er valgfrit, hvis du endnu ikke har købt en drone.</h2>
                <div className="stepthree">
                    <img src="images/AddDrone.png" />
                </div>
            </div>
        </div >
    );
};

export default Guide;
