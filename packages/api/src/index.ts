import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to your service!");
});
app.listen(3000, () => {
  console.log("App successfully started");
});
