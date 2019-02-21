import React from 'react';
import PropTypes from 'prop-types';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';

export default class Example extends React.Component {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
    isOpen: false
    };
}
toggle() {
    this.setState({
    isOpen: !this.state.isOpen
    });
}
render() {
    return (
    <div>
        <Navbar  expand="md">
        <NavbarBrand href="/">schedl</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="#">Monthly</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Agenda</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
    );
}
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}
