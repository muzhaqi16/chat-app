import React from 'react'
// import { Link } from "react-router-dom";
import "rbx/index.css";
import { Navbar, Button, } from 'rbx';

export default function Nav() {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item href="#">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        alt=""
                        role="presentation"
                        width="112"
                        height="28"
                    />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Segment align="start">
                    <Navbar.Item>Home</Navbar.Item>
                </Navbar.Segment>

                <Navbar.Segment align="end">
                    <Navbar.Item>
                        <Button.Group>
                            <Button color="primary">
                                <strong>Sign up</strong>
                            </Button>
                            <Button color="light">Log in</Button>
                        </Button.Group>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar >
    )
}
