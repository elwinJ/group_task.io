import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavBarLanding.css'

function NavBarLanding(){
    return(
        <nav className="navbar_landing">
            <h3>Logo</h3>
            <div className="links">
                <div className="link1">
                    <Link to="/landing">Sign In</Link>
                </div>

                <div className="link2">
                    <Link to="/about">About</Link>
                </div>

                <div className="link2">
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
        </nav>
    )
}

export default NavBarLanding