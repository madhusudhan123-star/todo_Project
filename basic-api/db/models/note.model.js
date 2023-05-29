const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: String,
  link: String,
});
module.exports = mongoose.model("Note", noteSchema);
// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function (value) {
//         return true; // Placeholder, replace with actual validation logic
//       },
//       message: "Invalid link",
//     },
//   },
// });

// module.exports = mongoose.model("Note", noteSchema);
