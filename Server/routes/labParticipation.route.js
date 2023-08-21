
module.exports = (app) => {
const {
  recordParticipation,
  updateParticipation,
  deleteParticipation,
  getParticipationById,
} = require("../controllers/labParticipation.controller");

// Record participation result
app.post("/participations", recordParticipation);

// Update participation result by ID
app.put("/participations/:id", updateParticipation);

// Delete participation result by ID
app.delete("/participations/:id", deleteParticipation);

// Get participation result by ID
app.get("/participations/:id", getParticipationById);

};