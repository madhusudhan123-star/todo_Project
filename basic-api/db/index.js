require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");

const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;
mongoose
  .connect(
    `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
