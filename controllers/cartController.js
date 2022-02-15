const fs = require("fs");

let functions = {
  leerJson: function () {
    return JSON.parse(
      fs.readFileSync(
        require("path").resolve(__dirname, "..", "data", "users.json"),
        "utf-8"
      )
    );
  },

  Guardar: (req, res) => {
    let arregloCart = functions.leerJson();
    let { carrito1, carrito2, carrito3 } = req.body;
    arregloCart.push({
      user: 2,
      cart: [
        {
          product: carrito1,
          qty: 2,
        },
        {
          product: carrito2,
          qty: 1,
        },
        {
          product: carrito3,
          qty: 1,
        },
      ],
    });
    this.writeJson(arregloCart);
  },

  writeJson: function (arreglo) {
    return fs.writeFileSync(
      require("path").resolve(__dirname, "..", "data", "users.json"),
      JSON.stringify(arreglo, null, "")
    );
  },
};

module.exports = functions;
