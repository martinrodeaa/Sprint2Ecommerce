const fetch = require("node-fetch2");
const fs = require("fs");
const { nextTick } = require("process");
let url = "https://dhfakestore.herokuapp.com/api/products";
let apiControllers = {
  index: async (req, res) => {
    let response = await fetch(url);
    let data = await response.json();
    let cortar = data.slice(0, 5);
    res.send(data);

    return data;
  },

  suggested: async (req, res) => {
    let response = await fetch(url);
    let data = await response.json();
    let cortar = data.slice(0, 5);
    res.send(cortar);
  },

  idProduct: async (req, res) => {
    let id = req.params.id;

    let response = await fetch(url);
    let data = await response.json();
    const productoFiltrado = data.find((product) => product._id == id);
    if (!productoFiltrado) {
      res.send("Error 404, Not found");
    } else {
      res.send(productoFiltrado);
    }
  },
  sameCategory: async (req, res) => {
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
      res.send(categoria);
      console.log(categoria);
    }
  },
  mostWanted: async (req, res) => {
    let response = await fetch(url);
    let data = await response.json();
    const mostwanted = data.filter((wanted) => wanted.mostwanted === true);
    res.send(mostwanted);
  },
};

module.exports = apiControllers;
