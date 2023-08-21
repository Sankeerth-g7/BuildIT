
module.exports = (app) => {
const {
  createTopic,
  updateTopic,
  deleteTopic,
  getTopicById,
} = require("../controllers/labTopic.controller");

// Create a new topic
app.post("/topics", createTopic);

// Update a topic by ID
app.put("/topics/:id", updateTopic);

// Delete a topic by ID
app.delete("/topics/:id", deleteTopic);

// Get a topic by ID
app.get("/topics/:id", getTopicById);


};