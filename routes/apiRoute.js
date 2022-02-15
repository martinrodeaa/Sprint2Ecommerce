let express = require("express");
let apiControllers = require("../controllers/apiController");
let usersController = require("../controllers/usersController");
let cartController = require("../controllers/cartController");
let router = express.Router();

router.get("/products", apiControllers.index);
router.get("/suggested", apiControllers.suggested);
router.get("/mostWanted", apiControllers.mostWanted);
router.post("/users");
router.post("/users/login", usersController.inicia);
router.post("/users/register", usersController.registro);
router.get("/cart/:u");
router.post("/cart/", cartController.writeJson);
router.post("/cart/:u?p=P");
router.get("/:id", apiControllers.idProduct);
router.get("/:id/related", apiControllers.sameCategory);

module.exports = router;
