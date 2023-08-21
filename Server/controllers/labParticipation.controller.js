const ParticipationResult = require("../models/labParticipation.model"); // Replace with the correct path to your ParticipationResult model

// Record a new participation result
async function recordParticipation(req, res) {
  try {
    const newParticipation = await ParticipationResult.create(req.body);
    res.status(201).json(newParticipation);
  } catch (error) {
    res.status(500).json({ error: "Failed to record participation result." });
  }
}

// Update a participation result by ID
async function updateParticipation(req, res) {
  try {
    const updatedParticipation = await ParticipationResult.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedParticipation) {
      res.json(updatedParticipation);
    } else {
      res.status(404).json({ error: "Participation result not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update participation result." });
  }
}

// Delete a participation result by ID
async function deleteParticipation(req, res) {
  try {
    const deletedParticipation = await ParticipationResult.findByIdAndDelete(req.params.id);
    if (deletedParticipation) {
      res.json({ message: "Participation result deleted successfully." });
    } else {
      res.status(404).json({ error: "Participation result not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete participation result." });
  }
}

// Get a participation result by ID
async function getParticipationById(req, res) {
  try {
    const participation = await ParticipationResult.findById(req.params.id);
    if (participation) {
      res.json(participation);
    } else {
      res.status(404).json({ error: "Participation result not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve participation result." });
  }
}

module.exports = {
  recordParticipation,
  updateParticipation,
  deleteParticipation,
  getParticipationById,
};
