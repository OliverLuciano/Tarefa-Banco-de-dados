const Express = require("express")


const router = Express.Router()
const dispositivoController = require('./controllers/dispositivoController')
const pessoaController = require("./controllers/pessoaController")
const usuarioController = require("./controllers/usuarioController")
const usuario_dispositivoController = require("./controllers/usuario_dispositivoController")


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

//rotas usuario_dispositivo
router.get("/usuario_dispositivo/", usuario_dispositivoController.show)
router.post("/usuario_dispositivo/cadastro",usuario_dispositivoController.cadastro)
router.delete("/usuario_dispositivo/busca",usuario_dispositivoController.delete)

module.exports = router