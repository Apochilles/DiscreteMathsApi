"use strict";
module.exports = function(app) {
  var todoList = require("../controllers/discreteMathsController");

  // todoList Routes
  app
    .route("/questions")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/:questionid")
    .get(todoList.read_a_question)
    .put(todoList.update_a_question)
    .delete(todoList.delete_a_question);

  app
    .route("/questions/baseconversion")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/baseconversion/:questionid")
    .get(todoList.read_a_question)
    .put(todoList.update_a_question)
    .delete(todoList.delete_a_question);

  app
    .route("/questions/logic")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/logic/:questionid")
    .get(todoList.read_a_question)
    .put(todoList.update_a_question)
    .delete(todoList.delete_a_question);

  app
    .route("/questions/sets")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/sets/:questionid")
    .get(todoList.read_a_question)
    .put(todoList.update_a_question)
    .delete(todoList.delete_a_question);

  app
    .route("/questions/bigO")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/bigO/:questionid")
    .get(todoList.read_a_question)
    .put(todoList.update_a_question)
    .delete(todoList.delete_a_question);

  app
    .route("/questions/graphs")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/graphs/:questionid")
    .get(todoList.read_a_question)
    .put(todoList.update_a_question)
    .delete(todoList.delete_a_question);

  app
    .route("/questions/functionsandrelations")
    .get(todoList.list_all_questions)
    .post(todoList.create_a_question);

  app
    .route("/questions/functionsandrelations/:questionid")
    .get(todoList.read_a_question)
    .put(todoList.update_a_question)
    .delete(todoList.delete_a_question);
};
