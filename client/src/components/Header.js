import React, { Component } from 'react';

import logo from '../img/sarajevoShuttle.png';

class Header extends Component{
	render(){
		return(
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="/">
    					<img src={logo} width="70" height="50" className="d-inline-block align-top" alt="" />
  				</a>
  					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    					<span className="navbar-toggler-icon"></span>
  					</button>
  					<div className="collapse navbar-collapse" id="navbarSupportedContent">
    					<ul className="navbar-nav mr-auto">
      						<li className="nav-item">
        						<a className="nav-link" href="/">Home</a>
      						</li>
      						<li className="nav-item">
        						<a className="nav-link" href="/airport">Airport Shuttle</a>
      						</li>
      						<li className="nav-item">
        						<a className="nav-link" href="/rent">Rent a Car</a>
      						</li>
      						<li className="nav-item">
        						<a className="nav-link" href="/transfers">Transfers</a>
      						</li>
      						<li className="nav-item">
        						<a className="nav-link" href="/contacts">Contacts</a>
      						</li>
      					</ul>
      				</div>
				</nav>
			</div>
			);
	}
}

export default Header;