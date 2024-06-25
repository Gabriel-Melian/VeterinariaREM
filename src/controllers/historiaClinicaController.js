import historiaClinica from "../models/historiaClinica.js";
import { conn } from "../models/db.js";

export async function getHistoriasClinicas() {//Mostrar todas las historias clinicas
    const query = "SELECT * FROM historiaclinica";
    try {
        const result = await conn.execute(query);
        const [rows] = result;
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getHistoriaClinica(id) {//Buscar por id
    const query = "SELECT * FROM historiaclinica WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        if(result.length === 0) return console.log('El id ' + id + ' no existe');
        //console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function editarHistoria(historiaClinica) {//Editar
    const query = `UPDATE historiaclinica SET diagnostico = ?, tratamiento = ?, motivo = ?, fechaAtencion = ? WHERE id = ?`;
    try {
        const result = await conn.execute(query, [historiaClinica.diagnostico, historiaClinica.tratamiento, historiaClinica.motivo, historiaClinica.fechaAtencion, historiaClinica.id]);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}