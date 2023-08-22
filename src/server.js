require('dotenv').config({path:'variaveis.env'})
const Express =  require("express")
const Cors =  require("cors")
const BodyParser = require("body-parser")
const routes = require("./routes")


const server = Express()
server.use(Cors())
server.use(BodyParser.urlencoded({extended:false}))
server.use(Express.json())
server.use("/api", routes)
server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})
