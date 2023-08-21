const Topic = require("./models/Topic"); // Replace with the correct path to your Topic model

// Create a new topic
async function createTopic(req, res) {
  try {
    const newTopic = await Topic.create(req.body);
    res.status(201).json(newTopic);
  } catch (error) {
    res.status(500).json({ error: "Failed to create topic." });
  }
}

// Update a topic by ID
async function updateTopic(req, res) {
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedTopic) {
      res.json(updatedTopic);
    } else {
      res.status(404).json({ error: "Topic not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update topic." });
  }
}

// Delete a topic by ID
async function deleteTopic(req, res) {
  try {
    const deletedTopic = await Topic.findByIdAndDelete(req.params.id);
    if (deletedTopic) {
      res.json({ message: "Topic deleted successfully." });
    } else {
      res.status(404).json({ error: "Topic not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete topic." });
  }
}

// Get a topic by ID
async function getTopicById(req, res) {
  try {
    const topic = await Topic.findById(req.params.id);
    if (topic) {
      res.json(topic);
    } else {
      res.status(404).json({ error: "Topic not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve topic." });
  }
}

module.exports = {
  createTopic,
  updateTopic,
  deleteTopic,
  getTopicById,
};
