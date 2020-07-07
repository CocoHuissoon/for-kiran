import {Nav, Navbar} from "react-bootstrap";
import React from "react";


const Header = () => {

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand >Made with love</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#loveMessage">Love Message</Nav.Link>
                <Nav.Link href="#pics">Pics</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Made by: <a href="#login">Coco Huissoon</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );

};
export default Header;
