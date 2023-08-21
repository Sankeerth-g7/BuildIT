let middleware = require("../util/middleware.js");


module.exports = (app) => {
const {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestionById,
} = require("../controllers/labQuestion.controller.js");

// Create a new question
app.post("/questions", createQuestion);

// Update a question by ID
app.put("/questions/:id", updateQuestion);

// Delete a question by ID
app.delete("/questions/:id", deleteQuestion);

// Get a question by ID
app.get("/questions/:id", getQuestionById);

};
