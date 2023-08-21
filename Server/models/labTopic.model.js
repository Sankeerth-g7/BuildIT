const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  topicId: String,
  topicName: String,
  courseId: String,   // Assuming a single course for each topic
  languageId: String,
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
