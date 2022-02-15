const fetch = require("node-fetch2");
const fs = require("fs");
const api = require("../controllers/apiController");
let url = "https://dhfakestore.herokuapp.com/api/products";

let productsController = {
  index: async (req, res) => {
    let id = req.params.id;

    let response = await fetch(url);
    let data = await response.json();
    const productoFiltrado = data.find((product) => product._id == id);
    if (!productoFiltrado) {
      res.send("Error 404, Not found");
    } else {
      res.render("pages/producto.ejs", (product = productoFiltrado));
    }
  },
  related: async (req, res) => {
    let id = req.params.id;

    let response = await fetch(url);
    let data = await response.json();
    const productoFiltrado = data.find((product) => product._id == id);

    if (!productoFiltrado) {
      res.send("Error 404, Not found");
    } else {
      const categoria = data.filter(
        (categoria) => categoria.category == productoFiltrado.category
      );
      res.render(
        "pages/producto.ejs",
        ((products = categoria), (product = productoFiltrado))
      );
    }
  },

  suggested: async (req, res) => {
    let id = req.params.id;

    let response = await fetch(url);
    let data = await response.json();
    const productoFiltrado = data.find((product) => product._id == id);

    let cortar = data.slice(0, 5);
    res.render(
      "pages/producto.ejs",
      ((products = cortar), (product = productoFiltrado))
    );
  },
};

module.exports = productsController;
