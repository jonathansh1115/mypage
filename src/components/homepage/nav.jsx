import React, { useState } from 'react'

//components
import Loginbuttonmodal from './loginmodal'

// libraries
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Button,
    Collapse, 
    NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => {

    const logout = () => {
        localStorage.setItem('auth_token', '')
    }

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link to='/home'>
                    <NavbarBrand>Itsmejonanathan</NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    <NavItem>
                        <Link to='admin_control_panel' style={{textDecoration:'none'}}>
                            <NavLink>Admin place</NavLink>
                        </Link>
                    </NavItem>
                    
                    <NavItem>
                    <NavLink href="https://github.com/jonathansh1115">GitHub</NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                
                {
                    localStorage.getItem('auth_token')==='27bfae9579970f9a88e12ba24fb00a4516459449'?
                    <Link to='/home'><Button onClick={logout}>Logout</Button></Link>
                    :
                    <Loginbuttonmodal />
                }
                </Collapse>
            </Navbar>
    </div>
    )
}