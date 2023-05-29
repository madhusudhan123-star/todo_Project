const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;
require("dotenv");
require("./db/index");
const { notesrouter } = require("./api/v1/index");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/notes", notesrouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
