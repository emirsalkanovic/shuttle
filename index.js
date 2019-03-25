const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const keys = require('./keys/dev');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contacts/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Contacts details:</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
		</ul>
		<h5>Message</h5>
			<p>${req.body.message}</p>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			tls: { rejectUnauthorized: false },
			auth: {
				user: keys.email,
				pass: keys.password
			}
		})

		let mailOptions = {
			from: 'test@testaccount.com',
			to: 'shuttlesarajevo@gmail.com',
			replyTo: "test@testaccount.com",
			subject: 'Message from Contacts',
			text: 'req.body.message',
			html: htmlEmail
		}

		transporter.sendMail(mailOptions, (err, info) =>{
			if(err){
				return console.log(err);
			}

			console.log("Message sent: %s", info.message);
			console.log("Message URL %s", nodemailer.getTestMessageUrl(info));
		})
	})
});

app.post('/shuttle/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Airport Shuttle details:</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Date: ${req.body.date}</li>
			<li>Number of passangers ${req.body.passangers}</li>
			<li>Pick up address: ${req.body.firstAddress}</li>
			<li>Drop off: ${req.body.lastAddress}</li>
			<li>Round trip: ${req.body.roundTrip}</li>
		</ul>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			tls: { rejectUnauthorized: false },
			auth: {
				user: keys.email,
				pass: keys.password
			}
		})

		let mailOptions = {
			from: 'test@testaccount.com',
			to: 'shuttlesarajevo@gmail.com',
			replyTo: "test@testaccount.com",
			subject: 'Message from Contacts',
			text: 'req.body.message',
			html: htmlEmail
		}

		transporter.sendMail(mailOptions, (err, info) =>{
			if(err){
				return console.log(err);
			}

			console.log("Message sent: %s", info.message);
			console.log("Message URL %s", nodemailer.getTestMessageUrl(info));
		})
	})
});

app.post('/rent/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
		<h3>Rent a Car details:</h3>
		<ul>
			<li>Name: ${req.body.firstName} ${req.body.lastName}</li>
			<li>Email: ${req.body.email}</li>
			<li>Date: ${req.body.startDate} - ${req.body.endDate}</li>
			<li>Type of car: ${req.body.carType}</li>
			<li>Pick up address: ${req.body.firstAddress}</li>
			<li>Drop off: ${req.body.lastAddress}</li>
			<li>Only in Bosnia: ${req.body.driveBh}</li>
		</ul>
		`

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			tls: { rejectUnauthorized: false },
			auth: {
				user: keys.email,
				pass: keys.password
			}
		})

		let mailOptions = {
			from: 'test@testaccount.com',
			to: 'shuttlesarajevo@gmail.com',
			replyTo: "test@testaccount.com",
			subject: 'Message from Contacts',
			text: 'req.body.message',
			html: htmlEmail
		}

		transporter.sendMail(mailOptions, (err, info) =>{
			if(err){
				return console.log(err);
			}

			console.log("Message sent: %s", info.message);
			console.log("Message URL %s", nodemailer.getTestMessageUrl(info));
		})
	})
});

const path = require('path');
app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
	});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})