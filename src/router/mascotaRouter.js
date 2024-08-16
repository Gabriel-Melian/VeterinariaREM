import { getMascotas, getMascotasDueno,
    guardarMascota, darBaja, darAlta, actualizarMascota } from "../controllers/mascotaController.js";
import {getDuenos} from "../controllers/duenosController.js";
import { Router } from "express";

const router = Router();

//http://localhost:3000/mascotas (GET Thunderclient)
router.get("/mascotas", async (req, res) => {
    const mascotas = await getMascotas();
    const duenos = await getDuenos();
    res.status(200).render('mascotas', { mascotas, duenos });
});

//http://localhost:3000/mascotas/nuevo (POST Thunderclient)
router.post("/mascotas/nuevo", async (req, res) => {
    const mascota = req.body;
    const result = await guardarMascota(mascota);
    res.status(200).json(result);
});
/*
{
"nombre": "Juan",
"especie": "Perro",
"raza": "Chihuahua",
"fechaNac": "2022-12-31",
"caractGenerales": "Cachorro",
"idHistoriaClinica": 1,
"idDueno": 1
}
*/

//http://localhost:3000/mascotas/2 (GET Thunderclient)
router.get("/mascotas/:id", async (req, res) => {
    const id = req.params.id;//params mapea los parametros que vienen en la url
    const mascota = await getMascotasDueno(id);
    res.status(200).json(mascota);
});

//http://localhost:3000/mascotas/desactivar/2 (PATCH Thunderclient)
router.patch("/mascotas/desactivar/:id", async (req, res) => {
    const id = req.params.id;
    const result = await darBaja(id);
    res.status(200).json(result);
});

//http://localhost:3000/mascotas/activar/2 (PATCH Thunderclient)
router.patch("/mascotas/activar/:id", async (req, res) => {
    const id = req.params.id;
    const result = await darAlta(id);
    res.status(200).json(result);
});

//http://localhost:3000/mascotas/2 (PATCH Thunderclient)
router.patch("/mascotas/:id", async (req, res) => {
    const id = req.params.id;
    const mascota = req.body;
    const result = await actualizarMascota(id, mascota);
    res.status(200).json(result);
});
/*
"nombre": "Tito",
"especie": "Perro",
"raza": "Chihuahua",
"fechaNac": "2022-12-31",
"caractGenerales": "Cachorro",
"idHistoriaClinica": 1,
"idDueno": 1
*/

export default router;