const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4000;
const date = require(__dirname + "/date.js");

let posts = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Render home page with all posts
app.get("/", function (req, res) {
  res.render("home", { userPost: posts });
});

// Render post page with all posts
app.get("/post", function (req, res) {
  res.render("post", { userPost: posts });
});

// Add a new post
app.post("/", function (req, res) {
  const newPostText = req.body.newPost;
  const newPost = { text: newPostText, timestamp: date.getFormattedDate() };
  posts.push(newPost);
  res.redirect("/post");
});

// Delete a post
app.post("/delete/:index", function (req, res) {
  const index = req.params.index;
  posts.splice(index, 1);
  res.redirect("/post");
});

// Update an existing post
app.post("/update/:index", function (req, res) {
  const index = req.params.index;
  const updatedText = req.body.newPost;
  posts[index].text = updatedText;
  res.redirect("/post");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
