const mongoose = require("mongoose");

const participationResultSchema = new mongoose.Schema({
  userId: String,
  topic: String,
  contestId: String,
  correctAnswers: Number,
  totalQuestions: Number,
  submissionTime: Date,
});

const ParticipationResult = mongoose.model("ParticipationResult", participationResultSchema);

module.exports = ParticipationResult;
