//Importacion de Modulos
import express from "express"
import { dirname, join } from "path" 
import { fileURLToPath } from "url"
import indexRoutes from "./routes/index.js"

//Const de direccionamiento
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000

//console.log(join(__dirname, 'views'));
//Set de Vistas
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Enrutamiento
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

//Escucha del Server
app.listen(process.env.PORT||port)
console.log("App Online on port:", port, "🤖");
