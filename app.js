const express = require("express");
const path = require("path");
const app = express();
const productRoute = require("./routes/productRoute");
const apiRoute = require("./routes/apiRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("assets"));
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("El servidor esta corriendo");
});

app.get("/", (req, res) => {
    res.render("./pages/index.ejs");
});

app.use("/products", productRoute);

app.use("/api", apiRoute);

app.get("/cart", (req, res) => {
    res.render("./pages/cart.ejs");
});

app.get("/register", (req, res) => {
    res.render("./pages/register.ejs");
});

app.get("/checkout", (req, res) => {
    res.send("501 Not Implemented");
});

// app.use("/register", usersController);

app.get("/register", (req, res) => {
    res.render("./pages/register.ejs");
});

app.get("/login", (req, res) => {
    res.render("./pages/login.ejs");
});

app.get("*", function(req, res) {
    res.send("Error 404", 404);
});