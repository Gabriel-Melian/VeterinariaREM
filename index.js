import express from "express";
import cors from "cors";
import morgan from "morgan";
import mysql from "mysql2";
import nodemon from "nodemon";
import path, { dirname } from "path";
import { fileURLToPath } from "url";//Toma URL de archivo y lo convierte en ruta.
import { conn } from "./src/models/db.js";// {conn} porque no esta exportado como default.
import mascotaRouter from "./src/router/mascotaRouter.js";
import duenosRouter from "./src/router/duenosRouter.js";
import historiaClinicaRouter from "./src/router/historiaClinicaRouter.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);//Importa el __filename 
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/src/public")));
app.set("view engine", "pug");
//app.locals.pretty = true;
app.set("views", path.join(__dirname, "/src/views"));
app.use('/', mascotaRouter);//Usa ruta base '/', despues lo que venga, lo redigije a mascotaRouter
app.use('/', duenosRouter);
app.use('/', historiaClinicaRouter);

//Esto es para renderizar el layout**
import {getDuenos} from "./src/controllers/duenosController.js";
//import { getMascotas } from "./src/controllers/mascotaController.js";

//Ruta para renderizar los clientes en el layout
app.get('/layout', async (req, res) => {
    try {
        const duenos = await getDuenos();
        res.render('clientes', { duenos });
    } catch (error) {
        console.error("Error fetching duenos:", error);
        res.status(500).send("Error fetching duenos");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})