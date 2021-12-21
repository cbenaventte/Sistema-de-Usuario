
// Importar módulos necesarios
const { Pool } = require('pg');

// Crear nueva instancia de la clase Pool, con objeto de configuración
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    port: 5432,
    database: "softlife",
});

// Función asincrónica para insertar usuarios
const insertar = async (datos) => {
    const consulta = {
    text: 'INSERT INTO usuarios (email,password) VALUES ($1,$2)',
    values: datos,
    };

    try {
        const result = await pool.query(consulta);
        return result;
    } catch (error) {
        console.log(error.code);
        return error;
    }
}

// Función asincrónica para consultar usuarios
const consultar = async () => {
    try {
        const result =  await pool.query('SELECT * FROM usuarios');
        return result;
    } catch (error) {
        console.log(error.code);
        return error;
    }
}

// Función asincrónica para validar usuarios
const validar = async (datos) => {
    const consulta = {
        text: 'SELECT COUNT(*) FROM usuarios WHERE email = $1 AND password = $2',
        values: datos,
        };
    
        try {
            const result = await pool.query(consulta);
            return result;
            
        } catch (error) {
            console.log(error.code);
            return error;
        }
}


// Exportar funciones
module.exports = { insertar,consultar,validar };