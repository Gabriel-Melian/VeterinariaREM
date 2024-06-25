import {getHistoriasClinicas, getHistoriaClinica, editarHistoria} from "../controllers/historiaClinicaController.js";
import {Router} from "express";

const router = Router();

//http://localhost:3000/historias (GET Thunderclient)
router.get("/historias", async (req, res) => {
    const historias = await getHistoriasClinicas();
    res.status(200).json(historias);
});

export default router;