import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rankings">Your Rankings</Link>
                    </li>
                    <li>
                        <Link to="/charts">Charts</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;