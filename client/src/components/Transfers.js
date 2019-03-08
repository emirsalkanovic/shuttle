import React, { Component } from 'react';
import axios from 'axios';

class Transfers extends Component{
	constructor(){
		super()

		this.state = {
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
		this.setState({ [e.target.name] : e.target.value });
	}

	async handleSubmit(e) {
		e.preventDefault()

		const { firstName, lastName, email, date, passangers, firstAddress, lastAddress, roundTrip } = this.state;

		const form = await axios.post("shuttle/form", {
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
		return(
			<div className="container transfers">
				<div className="text">
					<h3>Transfers to any destination in Bosnia and Herzegovina</h3>
					<p>We offer you safe and professional service for traveling and visiting other towns in Bosnia or region. </p>
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
							<label for="inputDate">Date of travel</label>
							<input type="date" className="form-control" name="date"
							onChange={this.handleChange} id="inputDate" />
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
							<label for="DropOff">Your Destination</label>
							<input type="text" className="form-control" id="DropOff" name="lastAddress" 
							placeholder="Your Destination" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label for="Select">Round trip:</label>
							<select className="form-control" name="roundTrip" id="Select" onChange={this.handleChange}>
								<option>No</option>
								<option>Yes</option>
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

export default Transfers;