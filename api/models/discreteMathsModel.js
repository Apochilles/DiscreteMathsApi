"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DiscreteMathsSchema = new Schema({

  questionname: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  category: {
    type: [{
      type: String,
      enum: ['baseconversion', 'logic', 'sets', 'bigO', 'graphs', 'functionsandrelations']
    }],
    default: ['pending']
  },
  difficulty: {
    type: [{
      type: String,
      enum: ['low', 'medium', 'high',]
    }],
    default: ['pending']
  },
  correct_answer: {
    type: String,
  },
  incorrect_answer_one: {
    type: String,
  },
  incorrect_answer_two: {
    type: String,
  },
  incorrect_answer_three: {
    type: String,
  },
});


module.exports = mongoose.model("Question", DiscreteMathsSchema);
