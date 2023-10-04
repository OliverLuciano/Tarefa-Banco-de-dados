const Express = require("express")


const router = Express.Router()
const dispositivoController = require('./controllers/dispositivoController')
const pessoaController = require("./controllers/pessoaController")
const usuarioController = require("./controllers/usuarioController")


//rotas dispositivo
router.get("/dispositivos/",dispositivoController.show)
router.post("/dispositivo/cadastro", dispositivoController.cadastro)
router.put("/dispositivo/:id", dispositivoController.update)
router.delete("/dispositivo/:id", dispositivoController.delete)

//rotas pessoa
router.get("/pessoas/", pessoaController.show)
router.post("/pessoa/cadastro",pessoaController.cadastro)
router.put("/pessoa/:id", pessoaController.update)
router.delete("/pessoa/:id", pessoaController.delete)

//rotas usuario
router.get("/usuarios/", usuarioController.show)
router.post("/usuario/cadastro",usuarioController.cadastro)
router.put("/usuario/:id", usuarioController.update)
router.delete("/usuario/:id", usuarioController.delete)

module.exports = router