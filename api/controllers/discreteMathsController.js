'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Questions');

exports.list_all_questions = function(req, res) {
  Task.find({}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};




exports.create_a_question = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};


exports.read_a_question = function(req, res) {
  Task.findById(req.params.taskId, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};


exports.update_a_question = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.questionId}, req.body, {new: true}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};


exports.delete_a_question = function(req, question) {


  Task.remove({
    _id: req.params.questionId
  }, function(err, questions) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};