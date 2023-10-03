const Express = require("express")


const router = Express.Router()
const dispositivoController = require('./controllers/dispositivoController')
const pessoaController = require("./controllers/pessoaController")


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

module.exports = router