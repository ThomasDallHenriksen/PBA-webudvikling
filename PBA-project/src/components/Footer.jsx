import '../assets/styles/footer.scss';

const Footer = () => {
    return (
        <footer className="block">
            {/* Øvre sektion */}
            <div className="upper-section">
                <div className="logo">
                    <img src="images/logo.png" alt="Logo" />
                </div>
                <div className="text">2023 AirPlate ApA</div>
                <div className="contact-container">
                    <div className="mail">
                        <img src="images/mail.png" alt="Mail" />
                    </div>
                    <div className="phone">
                        <img src="images/phone.png" alt="Phone" />
                    </div>
                    <div className="linkedin">
                        <img src="images/linkedin.png" alt="LinkedIn" />
                    </div>
                </div>
            </div>

            {/* Nedre sektion */}
            <div className="lower-section">
                <a href='/'>HOME</a>
                <a href='/Product'>PRODUCT</a>
                <a href='/Company'>COMPANY</a>
                <a href='/Contact'>CONTACT</a>
                <a href='/Contact'>AirMaps</a>
            </div>
        </footer>
    );
};

export default Footer;