import helloWorld from "@espresso-move/utils";
import express from "express";

helloWorld();
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to your service!");
});
app.listen(4000, () => {
  console.log("App successfully started");
});
