/*  
  *  @author <deiby.rodriguez@correounivalle.edu.co>  
  *  @version 0.0.1
**/
/*
  Este archivo contiene las migraciones necesarias para actualizar o crear la bd.
*/

// importar el modulo 'pg'
const { Client } = require('pg');
// importar el modulo 'node-pg-migrate'
const { default: migrate } = require('node-pg-migrate');
// constante para guardar la dirección de la base de datos
const connectionString = 'postgres://postgres:postgres@calima360.cyydty3tfbz4.us-east-1.rds.amazonaws.com:5432/calima';

// Función para crear la base de datos "calima"
async function createDatabase() {
    const client = new Client({
        connectionString: 'postgres://postgres:postgres@calima360.cyydty3tfbz4.us-east-1.rds.amazonaws.com:5432'
    });

    try {
        await client.connect(); // Conectarse a PostgreSQL
        await client.query('CREATE DATABASE calima'); // Ejecutar la consulta para crear la base de datos "calima"
        console.log('Base de datos "calima" creada exitosamente');
    } catch (error) {
        console.error('Error al crear la base de datos:', error);
    } finally {
        await client.end(); // Cerrar la conexión a PostgreSQL
    }
}

// Función para ejecutar las migraciones
async function runMigrations() {
  try {
    await createDatabase(); // Llamar a la función createDatabase() para asegurarse de que la base de datos existe
    await migrate({
      schema: 'public',
      direction: 'up',
      log: () => {},
      noLock: true,
      databaseUrl: connectionString,
      migrationsTable: 'migrations',
      dir: 'migrations'
    });
    console.log('Migraciones completadas exitosamente');
  } catch (error) {
    console.error('Error al ejecutar migraciones:', error);
  }
}

runMigrations().catch((error) => {
  console.error('Error al ejecutar migraciones:', error);
});