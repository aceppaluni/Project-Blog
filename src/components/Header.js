import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
//import CreatorImg from './app/IMG_1536.JPG'
//import NucampLogo from '../app/assets/logo.png'
import CreaterImg from '../app/assets/IMG_1536.JPG'
import UserLoginForm from '../features/user/UserLoginForm'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar dark color='success' sticky='top' expand='md'>
            <NavbarBrand href='/' className='ms-5'>
                <img src={CreaterImg} className='float-start' alt="creator image"></img>
                <h1 className='success mt-1'>Learnig Journey Blog</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>

                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' />Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-info fa-lg' />Directory
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/About'>
                            <i className='fa fa-list fa-lg'/>About
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    )
}
export default Header

// fixing footer color link