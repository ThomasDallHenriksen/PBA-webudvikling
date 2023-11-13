// import {Link} from 'react-router-dom';
import '../assets/styles/navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="images/logo.png" href="/" alt="'logo-placeholder'" />
            </div>
            <div className="link">
                <a href='/'>Home</a>
                <a href='/Product'>Product</a>
                <a href='/Company'>Company</a>
                <a href='/Contact'>Contact</a>
                <a id='navbarButton' href='/Signup'>Signup</a>
                <a id='navbarButton' href='/AirMap'>AirMap</a>
            </div>
        </nav>
    );
}

export default Navbar;