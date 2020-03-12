import React from 'react'
import {
    Link
} from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        ChaT app
                    </Link>
                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>

                        <Link className="navbar-item" to="/chat" >
                            Chat
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link className="button is-primary" to="login">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link className="button is-light" to="login">
                                    Log in
          </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
