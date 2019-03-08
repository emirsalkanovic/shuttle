import React, { Component } from 'react';
import axios from 'axios';

class Shuttle extends Component{
	constructor(){
		super()

		this.state ={
			firstName: '',
			lastName: '',
			email: '',
			date: '',
			passangers: '',
			firstAddress: '',
			lastAddress: '',
			roundTrip: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		this.setState({ [e.target.name] : e.target.value })
	}

	async handleSubmit(e) {
		e.preventDefault()

		const { firstName, lastName, email, date, passangers, firstAddress, lastAddress, roundTrip} = this.state;

		const form = await axios.post('shuttle/form', {
			firstName,
			lastName,
			email,
			date,
			passangers,
			firstAddress,
			lastAddress,
			roundTrip
		})
	}

	render(){
		console.log("iz shuttle:", this.state);
		return(
			<div className="container airport">
				<div className="text">
					<h3>Sarajevo Airport Transfer</h3>
					<p>Please fill a form with your details and submit it to book a ride. </p>
				  <div className="row info">
				  <div className="col-sm">
					<h5>Why Sarajevo Shuttle?</h5>
					<ul>
						<li>You will know your transfer fee and will be able to accept it or reject</li>
						<li>Cheaper than regular taxi service</li>
						<li>Safe and comfortable ride to your destination</li>
						<li>Our driver will give you nice intro into city</li>
					</ul>
				  </div>

				  <div className="col-sm">
				    <h5>Sarajevo Shuttle for business</h5>
				    <p>Ground transportation solutions for every travel need. Inquire to learn more about discounted group rates,
				     corporate direct bill accounts, meet and greet airport service, and 24/7 customer service.</p>
				  </div>
				  </div>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-sm">
							<input type="text" className="form-control" name="firstName"
							 placeholder="First name" onChange={this.handleChange} />
						</div>
						<div className="col-sm">
							<input type="text" className="form-control" name="lastName"
							placeholder="Last name" onChange={this.handleChange} />
						</div>
					</div>
						<div className="form-group">
							<label for="InputEmail">Email address</label>
							<input type="email" className="form-control" id="InputEmail" 
							name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label for="inputDate">Date of arrival</label>
							<input type="date" className="form-control" name="date" 
							id="inputDate" onChange={this.handleChange} />
						</div>
						<div className="form-group">
    						<label for="FormSelect">Number of passangers</label>
    						<select className="form-control" name="passangers" id="FormSelect" onChange={this.handleChange}>
      							<option>1</option>
      							<option>2</option>
      							<option>3</option>
      							<option>4</option>
      							<option>5</option>
      							<option>6</option>
      							<option>7</option>
      							<option>8</option>
    						</select>
  						</div>
  						<div className="form-group">
							<label for="PickUp">Pick Up Address</label>
							<input type="text" className="form-control" id="PickUp" 
							name="firstAddress" placeholder="Pick Up Address" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label for="DropOff">Drop Off Address</label>
							<input type="text" className="form-control" id="DropOff" name="lastAddress"
							placeholder="Your Destination" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label for="Select">Round trip:</label>
							<select className="form-control" name="roundTrip" id="Select" onChange={this.handleChange}>
								<option>Yes</option>
								<option>No</option>
							</select>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
				</form>
			</div>
			);
	}
}

export default Shuttle;