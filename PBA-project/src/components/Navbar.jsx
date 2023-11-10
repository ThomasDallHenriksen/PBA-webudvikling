// import {Link} from 'react-router-dom';
import '../assets/styles/navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="link">
                <a href='/'>Home</a>
                <a href='/Products'>Products</a>
                <a href='/Company'>Company</a>
                <a href='/Contact'>Contact</a>
                <a id='airMap' href='/AirMap'>AirMap</a>
            </div>
        </nav>
    );
}

export default Navbar;