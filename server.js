const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://piyushat25:piyushat25@todo.z4rdf.mongodb.net/?retryWrites=true&w=majority&appName=todo",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/todos", require("./routes/todos"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
