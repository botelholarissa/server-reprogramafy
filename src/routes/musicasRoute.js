const express = require("express")
const router = express.Router()
const controller = require("../controller/musicasController")

router.get("/musicas", controller.getMusicas)
router.get("/musicas/:id", controller.getById)
router.get("/artistas", controller.getArtistas)
router.get("/artistas/:id", controller.getArtistaById)



module.exports = router