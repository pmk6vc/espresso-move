import express from "express";
import helloWorld from "@espresso-move/utils"

helloWorld()
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to your service!");
});
app.listen(4000, () => {
  console.log("App successfully started");
});
