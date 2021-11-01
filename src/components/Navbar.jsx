import React, { useState } from "react";
import CartWidget from "./CartWidget.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import categories from "../categories/categories";
import links from "../links/links";

const Navbar_ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand>
          <Link to={"/inicio"} className="linkLogo">
            {" "}
            <p className="logo">FUTSHOP</p>{" "}
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav ul" navbar>
            {links.map((link) => (
              <NavItem>
                <Link to={link.address} className="botonMenu" key={link.id}>
                  {link.title}
                </Link>
              </NavItem>
            ))}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Link to={"/camisetas"} className="botonProd">
                  {" "}
                  Camisetas{" "}
                </Link>
              </DropdownToggle>
              <DropdownMenu right>
                {categories.map((cat) => (
                  <DropdownItem>
                    <Link
                      to={cat.address}
                      className="botonCat"
                      key={cat.id}
                      exact
                      activeclassName="activeclass"
                    >
                      {cat.title}{" "}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <NavbarBrand className="cart" href="/">
         <CartWidget/>
        </NavbarBrand>
      </Navbar>
    </header>
  );
};

export default Navbar_;
