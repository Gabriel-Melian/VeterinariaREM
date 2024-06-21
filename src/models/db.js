import mysql from "mysql2/promise";

const config={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'veterinariarem'
};
try {
    const conn = await mysql.createConnection(config);
    console.log('Conexión a la base de datos exitosa');
    await conn.end();
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
}
export const conn = await mysql.createConnection(config);