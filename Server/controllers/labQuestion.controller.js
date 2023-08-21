const labQuestion = require("../models/labquestion.model"); // Replace with the correct path to your Question model

// Create a new question
async function createQuestion(req, res) {
  try {
    const newQuestion = await Question.create(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: "Failed to create question." });
  }
}

// Update a question by ID
async function updateQuestion(req, res) {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedQuestion) {
      res.json(updatedQuestion);
    } else {
      res.status(404).json({ error: "Question not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update question." });
  }
}

// Delete a question by ID
async function deleteQuestion(req, res) {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (deletedQuestion) {
      res.json({ message: "Question deleted successfully." });
    } else {
      res.status(404).json({ error: "Question not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete question." });
  }
}

// Get a question by ID
async function getQuestionById(req, res) {
  try {
    const question = await Question.findById(req.params.id);
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ error: "Question not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve question." });
  }
}

module.exports = {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestionById,
};
