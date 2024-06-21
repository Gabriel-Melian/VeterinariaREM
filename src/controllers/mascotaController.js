import Mascota from "../models/mascota.js";
import { conn } from "../models/db.js";

export async function getMascotas() {//Mostrar todas las mascotas
    const query = "SELECT * FROM mascotas";
    try {
        const result = await conn.execute(query);
        const [rows] = result;
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getMascotasDueno(idDueno) {//Buscar por id
    const query = "SELECT * FROM mascotas WHERE idDueno = ?";
    try {
        const result = await conn.execute(query, [idDueno]);
        if(result.length === 0) return console.log('El idDueno ' + id + ' no existe');
        //console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function guardarMascota(mascota) {//Guardar
    const query = "INSERT INTO mascotas (id, nombre, especie, raza, fechaNac, caractGenerales, idHistoriaClinica, idDueno) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    try {
        const result = await conn.execute(query, [mascota.id, mascota.nombre, mascota.especie, mascota.raza, mascota.fechaNac, mascota.caractGenerales, mascota.idHistoriaClinica, mascota.idDueno]);
        //console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function darBaja(id) {//Se da de baja a la mascota
    const query = "UPDATE mascotas SET estado = 0 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        //console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function darAlta(id) {
    const query = "UPDATE mascotas SET estado = 1 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        //console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function actualizarMascota(mascota) {
    const query = "UPDATE mascotas SET nombre = ?, especie = ?, raza = ?, fechaNac = ?, caractGenerales = ?, idHistoriaClinica = ?, idDueno = ? WHERE id = ?";
    try {
        const result = await conn.execute(query, [mascota.nombre, mascota.especie, mascota.raza, mascota.fechaNac, mascota.caractGenerales, mascota.idHistoriaClinica, mascota.idDueno, mascota.id]);
        //console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}