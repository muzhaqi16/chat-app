import React from 'react'
import {
    Link
} from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav class="navbar is-link" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/">
                        ChaT app
                    </Link>
                    <Link role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link class="navbar-item" to="/">
                            Home
                        </Link>

                        <Link class="navbar-item" to="/chat" >
                            Chat
                        </Link>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <Link class="button is-primary" to="login">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link class="button is-light" to="login">
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
