// This DB file sample will be a typical setup for an Express, Mongoose, and MongoDB setup.

/// this is where we will set up our db connection

const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndMondify: false
})

mongoose.connection.on('connected', () => {
	console.log('mongoose is connected');
}, connectionString);

mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose failed to connect');
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoose is disconnected');
}, connectionString);

