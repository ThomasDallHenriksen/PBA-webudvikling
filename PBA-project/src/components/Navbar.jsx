// import {Link} from 'react-router-dom';
import '../index.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="link">
                <a href='/'>Home</a>
                <a href='/Create'>Create</a>
            </div>
        </nav>
    );
}

export default Navbar;