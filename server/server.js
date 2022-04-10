require("dotenv").config();
const express = require("express");

const app = express();

app.get("/api/restaurants", (req, res) =>{
   res.send("Hello World ")
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});