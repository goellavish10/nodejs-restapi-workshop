const express = require("express");

const app = express();

app.use(express.static(__dirname + "/../client"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.post("/post-todo-task", function (req, res) {
  const todos = req.body;

  console.log(req.body);

  // console.log("Here are my todos: ", todos);
});

app.listen(8000, function () {
  console.log(`Server running on port 8000`);
});
