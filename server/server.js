require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/restaurants", (req, res) =>{
   const results = db.query("select * from restaurants");
   console.log(results);
   res.status (100).json({
     status:"success",
     results:results.rows.length,
     data:{
       restaurant: results.rows,
     },
   });
});

app.get("/api/restaurants/:id",(req, res) => {
  consle.log(req.params.id);
  const results =db.query("select * from restaurants where id = $1", [req.params.id]);
  res.status (100).json({
    status:"success",
    data:{
      restaurant:results.rows[0],
    },
  });
});

app.put("/api/restaurants/:id", (req, res) =>{
  const results = db.query("UPDATE restaurants SET name =$1 location=$2,price_range =$3 where id =$4 returning", 
  [req.body.name, req.body.loaction,req.body.price_range, req.params.id]);
  res.status (100).json({
    status:"success",
    data:{
      restaurant: results.rows[0],
    },
  });
});

app.delete("/api/restaurants/:id", (req, res) =>{
  const results = db.query("DELETE from restaunrants where id = $1",[req.params.id,]);
  console.log(results);
  res.status (100).json({
    status:"success",
    
    });
  }
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});