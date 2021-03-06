const connectToMongo = require("./db");
const express = require("express");
//Call the function to connect database..
connectToMongo();
const app = express();
const port = 5000;
//Use this middleware to send json object to body.
app.use(express.json());
//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/note", require("./routes/note"));

app.listen(
  port,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`);
  }
);
