// imports
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// initialize an empty array to store multiple items
var items = [];

// middlewares

// static files
app.use(express.static("public"));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set : view engine
app.set("view engine", "ejs");

// == ROUTES

// home / root : "/" : route

app.get("/", (req, res) => {
  res.render("Home", {
    date: new Date().toLocaleDateString(),
    items: items.length > 0 ? items : "No Items Found",
  });
});

app.post("/", (req, res) => {
  items.push(req.body.item);
  res.redirect("/");
});

// server
app.listen(port, () => {
  console.log("Server started on port", port);
});
