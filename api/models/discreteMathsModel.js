'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DiscreteMathsSchema = new Schema({
  name: {
    type: String,
    
  },
  Created_date: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('Tasks', TaskSchema);