const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3002;
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ylmzibrahim:elToKGchR15WHelW@web-programming-homewor.yl2z6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.listen(PORT, () => console.log(`Server running on PORT=${PORT}`));

app.get("/", (req, res) => {
  console.log("get");
  MongoClient.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    },
    (err, db) => {
      if (err) throw err;
      const dbo = db.db("web-promramming-homework");
      dbo
        .collection("lessons")
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          res.send(result)
        });
    }
  );
});

app.post("/", (req, res) => {
  console.log("post");
  MongoClient.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    },
    (err, db) => {
      if (err) throw err;
      const dbo = db.db("web-promramming-homework");
      dbo
        .collection("lessons")
        .insertOne({title: req.body.title}, (err, res) => {
            if (err) throw err
            console.log("Lesson added");
        })
    }
  );
});
