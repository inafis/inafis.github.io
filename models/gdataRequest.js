var mongoose = require('mongoose')
	, Schema = mongoose.Schema;


mongoose.model('Request',
				new Schema({
					periodEnding: Date,
					Country: String,
					cldrCode: String,
					legalProcess: String,
					userDataResults: Number,
					percentageReq: Number,
					usersSpecified: Number 
				}),
				'GoogleData');

