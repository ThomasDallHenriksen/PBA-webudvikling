// import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Navbar</h2>
            <div className="link">
                <a href='/'>Home</a>
                <a href='/Create'>Create</a>
            </div>
        </nav>
    );
}

export default Navbar;