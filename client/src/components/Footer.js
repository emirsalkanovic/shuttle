import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<div className="footer-copyright text-center py-3">
                        &copy; {(new Date().getFullYear())} Copyright: <Link to="/"> Sarajevo Shuttle </Link>
                </div>
			</div>
			);
	}
}

export default Footer;