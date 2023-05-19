import React from 'react';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useCartContext from '../../store/CartContext';



function NavBar(props) {
    const [expanded, setExpanded] = useState(false);
    const { contextFunction } = useCartContext();
    contextFunction();
    return (
        <header>
            <nav>
                <Navbar expanded={expanded} className="headlogbg" bg="light" expand="lg">
                    <Container>
                        <link to="/"><Navbar.Brand className="swirl-in-fwd"><a href="/"><img className="navbar-brand" src={logo} alt="logo" /></a></Navbar.Brand></link>

                        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <link onClick={() => setExpanded(false)} to="/inicio"><Nav.Link href="#home">Inicio</Nav.Link></link>
                                <NavDropdown title="Menú" id="basic-nav-dropdown">
                                    <link onClick={() => setExpanded(false)} to="/"><NavDropdown.Item>Saumerios & Hierbas</NavDropdown.Item></link>
                                    <link onClick={() => setExpanded(false)} to="/category/velas"><NavDropdown.Item>Velas</NavDropdown.Item></link>
                                    <Link onClick={() => setExpanded(false)} to="/category/complementos"><NavDropdown.Item>Complementos</NavDropdown.Item></Link>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                
                            </Nav>

                        </Navbar.Collapse>
                        <CartWidget />
                    </Container>

                </Navbar>
            </nav>
        </header>
    );
}

export default NavBar;