import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';

class Main extends Component{
	render(){
		return(
			<div className="container">
				<div className="container first">
				    <div className="shuttle">
						<h1>Sarajevo Shuttle</h1>
						<p>We take you to and from the airport.</p>
						<Link to="/airport" className="btn btn-lg btn-primary">BOOK A RIDE</Link>
					</div>
				</div>
				<div className="container second">
					<h2>Our service:</h2>
					<div className="row">
						
						<div className="col-sm box">
							<Link to="/airport">
								<div className="circle a">
									<i className="fas fa-plane fa-2x"></i>
								</div>
								<h4>Airport Shuttle</h4>
								<p>Need a transfer from or to the airport? Make yourself comfortable and book a safe and relaible ride.</p>
							</Link>	
						</div>
						

						
						<div className="col-sm box">
						<Link to="/rent">
							<div className="circle b">
								<i className="fas fa-car fa-2x"></i>
							</div>
							<h4>Rent a Car</h4>
							<p>Do you want to rent a car? Provide us with information about your needs and our junior agent will provide you with many rent a car options.</p>
						</Link>
						</div>
						

						
						<div className="col-sm box">
						<Link to="/transfers">
							<div className="circle c">
								<i className="fas fa-shuttle-van fa-2x"></i>
							</div>
							<h4>Transfers</h4>
							<p>Want to travel around Bosnia & Herzegovina? We can offer you transfers and tours so you can explore beautifull sites of our country.</p>
						</Link>
						</div>
						
					</div>
					
				</div>
				<div className="container third">
					<h2>How to use:</h2>
					
					<div className="row">
						<div className="col-sm box">
							<img src={p1} className="img2" />
							<h4>1. Your needs</h4>
							<p>You need transfer to or from airport, want to visit and travel to other towns.</p>
						</div>
						<div className="col-sm box">
							<img src={p2} className="img2" />
							<h4>2. Make a action</h4>
							<p>Provide us with information about places you want to reach and your travel details.</p>
						</div>
						<div className="col-sm box">
							<img src={p3} className="img2" />
							<h4>3. Receive a Offer</h4>
							<p>We will send you best possible deals for your travel.</p>
						</div>
						<div className="col-sm box">
							<img src={p4} className="img2" />
							<h4>4. Accept or Reject</h4>
							<p>After you evaluate our offers you can accept it or reject it.</p>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Main;