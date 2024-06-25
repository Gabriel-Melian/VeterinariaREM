import Dueno from "../models/dueno.js";
import { conn } from "../models/db.js";


export async function getDuenos() {//Mostrar todos los duenos
    const query = "SELECT * FROM duenos";
    try {
        const result = await conn.execute(query);
        const [rows] = result;
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}


export async function getDueno(id) {//Buscar por id
    const query = "SELECT * FROM duenos WHERE id = ?";
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


export async function guardarDueno(dueno) {//Guardar

    //Convertir el telefono a BigInt
    const telefono = BigInt(dueno.telefono);

    //Verificar el rango del telefono como BigInt
    if (telefono < -9223372036854775808n || telefono > 9223372036854775807n) {
        throw new Error("Valor fuera de rango para BIGINT (telefono)");
    }

    const query = "INSERT INTO duenos (apellido, nombre, dni, telefono, email) VALUES (?, ?, ?, ?, ?)";
    const values = [dueno.apellido, dueno.nombre, dueno.dni, dueno.telefono, dueno.email];
    if (dueno === null) return console.log("Error: dueno es null");
    try {
        const result = await conn.execute(query, values);
        //console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function editarDueno(dueno) {
    const query = `UPDATE duenos SET apellido = ?, nombre = ?, dni = ?, telefono = ?, email = ? WHERE id = ?`;
    if (dueno === null) return console.log("Error: Paciente es null");
    try {
        const result = await conn.execute(query, [dueno.apellido, dueno.nombre, dueno.dni, dueno.telefono, dueno.email, dueno.id]);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}
