
module.exports = (app) => {
const {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
} = require("../controllers/labCourse.controller");

// Create a new course
app.post("/courses", createCourse);

// Update a course by ID
app.put("/courses/:id", updateCourse);

// Delete a course by ID
app.delete("/courses/:id", deleteCourse);

// Get a course by ID
app.get("/courses/:id", getCourseById);

};
