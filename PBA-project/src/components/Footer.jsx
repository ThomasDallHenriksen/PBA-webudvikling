import '../assets/styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__column">
                <img src="images/logo.png" className="airplate-logo" />
                <div className="about-heading">About AirPlate</div>
                <div className="about-text">The AirPlate is a small, self-contained solution to tagging and tracking your drones and aerial devices</div>
            </div>
            <div className="footer__column">
                <div className="links">
                    <a href='/'>Home</a>
                    <a href='/Product'>Product</a>
                    <a href='/Company'>Company</a>
                    <a href='/Contact'>Contact</a>
                </div>
            </div>
            <div className="footer__column">
                <div className="contact-list">
                    <div className="contact">Contact us</div>
                    <div className="email">airplategmail.com</div>
                    <div className="number">+45 31549731</div>
                    <a href="https://www.linkedin.com/company/airplate-aero/" className="linkedin-link">
                        <img src="images/blue-linkedin.png" className="linkedin-logo" alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>
            <div className="footer__column">
                <a href="/Addairplate">
                    <div className="airmap">Add AirPlate</div>
                    <img src="images/map.png" alt="Map" />
                </a>
            </div>

        </footer>
    );
};

export default Footer;