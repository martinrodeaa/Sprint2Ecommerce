const req = require("express/lib/request");
const functions = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");

let usersMethod = {
  registro: (req, res) => {
    let arregloUsuario = functions.leerJson();
    let { email, pass, ValidPass } = req.body;
    if (pass == ValidPass) {
      if (arregloUsuario.find((usuario) => usuario.email == email)) {
        res.send("Usuario registrado");
      } else {
        arregloUsuario.push({
          id: 1,
          email: email,
          password: pass,
        });
      }
    }

    functions.escribirJson(arregloUsuario);
    res.redirect("/login");
  },
  inicia: (req, res) => {
    let arregloviejo = functions.leerJson();
    let { NomUsr, Pass } = req.body;
    if (arregloviejo.find((usuario) => usuario.email == NomUsr)) {
      if (arregloviejo.find((contra) => contra.password == Pass)) {
        res.redirect("/");
      } else {
        res.send("Contraseña incorrecta");
      }
    } else {
      res.send("Usuario no encontrado");
    }
  },
};

module.exports = usersMethod;
