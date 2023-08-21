const Course = require("../models/labCourse.model"); // Replace with the correct path to your Course model

// Create a new course
async function createCourse(req, res) {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: "Failed to create course." });
  }
}

// Update a course by ID
async function updateCourse(req, res) {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedCourse) {
      res.json(updatedCourse);
    } else {
      res.status(404).json({ error: "Course not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update course." });
  }
}

// Delete a course by ID
async function deleteCourse(req, res) {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (deletedCourse) {
      res.json({ message: "Course deleted successfully." });
    } else {
      res.status(404).json({ error: "Course not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete course." });
  }
}

// Get a course by ID
async function getCourseById(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: "Course not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve course." });
  }
}

module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
};
