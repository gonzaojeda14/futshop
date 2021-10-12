import React, { useState } from 'react';
import CartWidget from './CartWidget.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navbar_ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className= "navbar" light expand="md">
        <NavbarBrand href="/"><p className="logo">FUTSHOP</p></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav" navbar>
            <NavItem>
              <NavLink className="botonMenu" href="/components/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="botonMenu" href="/components/">Nosotros</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="botonMenu" nav caret>
                Productos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="botonMenu">
                  Camisetas
                </DropdownItem>
                <DropdownItem className="botonMenu">
                  Shorts
                </DropdownItem>
                <DropdownItem className="botonMenu">
                  Remeras
                </DropdownItem>
                <DropdownItem className="botonMenu">
                  Buzos
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <NavbarBrand className= "cart" href="/"><CartWidget/></NavbarBrand>
      </Navbar>
    </header>
  );
}

export default Navbar_;