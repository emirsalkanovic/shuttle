import React, { Component } from 'react';
import axios from 'axios';

class RentACar extends Component{
	constructor() {
		super()

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			startDate: '',
			endDate: '',
			carType: '',
			firstAddress: '',
			lastAddress: '',
			driveBh: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		this.setState({ [ e.target.name ] : e.target.value });
	}

	async handleSubmit(e){
		e.preventDefault()

		const { firstName, lastName, email, startDate, endDate, carType, firstAddress, lastAddress, driveBh } = this.state;

		const form = await axios.post('rent/form', {
			firstName,
			lastName,
			email,
			startDate,
			endDate,
			carType,
			firstAddress,
			lastAddress,
			driveBh,
		})
	}
	render(){
		return(
			<div className="container rent">
				<div className="text-rent">
					<div className="bg"></div>
					<h3>Rent A Car</h3>
					<p><strong>We can find you best deals in Sarajevo for Rent a Car, our junior agent will 
					provide you with various offers so you can choose the best deal for you.</strong></p>
					<h5>Why our Rent A Car service?</h5>
					<ul>
						<li>We have more than 20 years experience working in tourism and hospitality industry. With our network you will have the best deal!</li>
						<li>Various offers to choose from</li>
						<li>Possibility of picking car on airport or any other location in town</li>
						<li>Fully insured cars</li>
						<li>Discount on petrol stations in Bosnia and Herzegovina</li>
					</ul>
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
							name="email" aria-describedby="emailHelp" onChange={this.handleChange} placeholder="Enter email" />
						</div>
						<div className="form-group row">
							<div className="col-sm">
								<label for="dateFrom">Start Date</label>
								<input type="date" className="form-control" name ="startDate" 
								onChange={this.handleChange} id="dateFrom" />
							</div>
							<div className="col-sm">
								<label for="dateTo">End Date</label>
								<input type="date" className="form-control" name="endDate"
								onChange={this.handleChange} id="dateTo" />
							</div>
						</div>
						<div className="form-group">
    						<label for="FormSelect">Type of car</label>
    						<select className="form-control" name="carType" onChange={this.handleChange} id="FormSelect">
      							<option>Economic</option>
      							<option>Compact</option>
      							<option>Limousine</option>
      							<option>Luxury</option>
      							<option>Van</option>
    						</select>
  						</div>
  						<div className="form-group">
							<label for="PickUp">Pick Up Address</label>
							<input type="text" className="form-control" name="firstAddress" onChange={this.handleChange} id="PickUp" placeholder="Pick Up Address" />
						</div>
						<div className="form-group">
							<label for="DropOff">Drop Off Address</label>
							<input type="text" className="form-control" id="DropOff" name="lastAddress" 
							onChange={this.handleChange} placeholder="Your Destination" />
						</div>
						<div className="form-group">
							<label for="driveBh">Will you use car outside of B&H?</label>
							<select className="form-control" name="driveBh" onChange={this.handleChange} id="driveBh">
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

export default RentACar;