import React, { Component } from 'react';
import axios from 'axios';

class Contacts extends Component{
	constructor(){
		super()

		this.state = {
			firstName : '',
			lastName : '',
			email : '',
			message : ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		this.setState({ [e.target.name] : e.target.value })
	}

	async handleSubmit(e) {
		e.preventDefault()

		const { firstName, lastName, email, message } = this.state;

		const form = await axios.post('/contacts/form', {
			firstName,
			lastName,
			email,
			message
		})
	}

	render(){
		console.log("iz state:", this.state);
		return(
			<div className="container contacts">
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-sm">
							<input type="text" name="firstName" className="form-control"
							 placeholder="First Name" onChange={this.handleChange} />
						</div>
						<div className="col-sm">
							<input type="text" name="lastName" className="form-control"
							 placeholder="Last Name" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
							<label for="InputEmail">Email address</label>
							<input type="email" name="email" className="form-control" 
							id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" 
							onChange={this.handleChange} />
					</div>
					<div className="form-group">
    					<label for="Textarea1">Message:</label>
    					<textarea className="form-control" name="message" id="Textarea1" rows="4" onChange={this.handleChange}></textarea>
  					</div>
  					<div className="form-group">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
			);
	}
}

export default Contacts;