var mongoose = require('mongoose')
	, Schema = mongoose.Schema;


mongoose.model('Sample',
				new Schema({
					periodEnding: Date,
					Country: String,
					cldrCode: String,
					legalProcess: String,
					userDataResults: Number,
					percentageReq: Number,
					usersSpecified: Number 
				}),
				'Sample');

