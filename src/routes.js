const Express = require("express")


const router = Express.Router()
const usuarioController = require("./controllers/usuarioController")

router.get("/usuarios", usuarioController.show)
router.get("/usuario/:id", usuarioController.index)
router.post("/usuario", usuarioController.cadastro)

module.exports = router