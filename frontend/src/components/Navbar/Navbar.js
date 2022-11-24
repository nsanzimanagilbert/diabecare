import "./Navbar.css";
import React from 'react'

function Navbar() {
	return (
		<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light' style={{padding:"5px"}}>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					Diacheck
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#about'>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#features'>
								Features
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#blogs'>
								Articles
							</a>
						</li>
						
						<li className='nav-item'>
							<a className='nav-link' href='#contact'>
								Contact
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/login'>
								Sign in
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
