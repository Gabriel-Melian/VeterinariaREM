import {getDuenos, getDueno, guardarDueno, editarDueno} from "../controllers/duenosController.js";
import {Router} from "express";

const router = Router();

//http://localhost:3000/duenos (GET Thunderclient)
router.get("/duenos", async (req, res) => {
    const duenos = await getDuenos();
    res.status(200).json(duenos);
    //res.status(200).render("clientes", {duenos : duenos} );
});

//http://localhost:3000/duenos/nuevo (POST Thunderclient)
router.post("/duenos/nuevo", async (req, res) => {
    const dueno = req.body;
    console.log(dueno);
    const result = await guardarDueno(dueno);
    res.status(200).json(result);
});
/*
{
  "apellido": "Machado",
  "nombre": "Rut",
  "dni": 17672764,
  "telefono": 2664702704,
  "email": "veterinariarem123@gmail.com"
}
*/

export default router;