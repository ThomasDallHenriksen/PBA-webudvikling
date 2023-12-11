import '../assets/styles/guide.scss';


const Guide = () => {
    return (
        <div className="block">
            <div className="element">
                <h2 className='title'>Step 1. Hjemmeside</h2>
                <h2 className='bread'>Gå til www.airplate.dk/setup eller scan QR-koden som medfølger i pakken for at komme i gang med opsætning af din nye AirPlate.</h2>
            <a href=""></a>
            </div>
            <div className='element'>
                <h2 className='title'>Step 2. Bruger</h2>
                <h2 className='bread'>For at registrere din nye AirPlate, skal du oprette en ny bruger hvis du ikke allerede er registreret som nuværende, dermed log in. Hvis ikke, følg formularen for at oprette ny bruger.</h2>
            </div>
            <div className='element'>
                <h2 className='title'>Step 3. Opsætning </h2>
                <h2 className='bread'>Som bruger har du mulighed for at indtaste det medfølgende serienummer på din AirPlate(bagsiden af AirPlate) for at registrere den. Når du er logget ind, sker dette ved at gå til; AirMap → Dashboard → Configuration → Add Airplate og her indtastes serienummeret til din AirPlate. Klik på submit, hvor efter ved korrekt oplyst serienummer bliver den registreret i databasen.</h2>
            </div>
        </div>
    );
};

export default Guide;