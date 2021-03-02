import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
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
	NavbarText,
} from 'reactstrap';

const BsNavLink = ({ route, title }) => {
	return (
		<Link href={route}>
			<a className='port-navbar-link nav-link'> {title} </a>
		</Link>
	);
};
const Login = () => {
	return (
		<Link href='/api/auth/login'>
			<span className='port-navbar-link nav-link clickable'>Login</span>
		</Link>
	);
};
const Logout = () => {
	return (
		<Link href='/api/auth/logout'>
			<span className='port-navbar-link nav-link clickable'>Logout</span>
		</Link>
	);
};

const NavHeader = (props) => {
	const { className } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user } = useUser();

	const toggle = () => setIsOpen(!isOpen);
	const toggleDropdown = () => setDropdownOpen(!this.state.dropdownOpen);
	const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';
	return (
		<div>
			<Navbar
				className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
				color='transparent'
				dark
				expand='md'>
				<NavbarBrand className='port-navbar-brand' href='/'>
					Renjith R
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem className='port-navbar-item'>
							<BsNavLink route='/' title='Home' />
						</NavItem>
						<NavItem className='port-navbar-item'>
							<BsNavLink route='/about' title='About' />
						</NavItem>
						<NavItem className='port-navbar-item'>
							<BsNavLink route='/portfolio' title='Portfolio' />
						</NavItem>
						<NavItem className='port-navbar-item'>
							<BsNavLink route='/resume' title='RESUME' />
						</NavItem>
						{user ? (
							<NavItem className='port-navbar-item'>
								<Logout />
							</NavItem>
						) : (
							<NavItem className='port-navbar-item'>
								<Login />
							</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavHeader;
