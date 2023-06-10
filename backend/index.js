/*  
  *  @author <deiby.rodriguez@correounivalle.edu.co>  
  *  @version 0.0.1
**/
/*
  Este archivo contiene las rutas necesarias para el manejo de datos en la bd.
*/

// Importar el módulo 'express'
const express = require('express');

// Importar el módulo 'bcrypt'
const bcrypt = require('bcrypt');

// Importar el módulo 'jsonwebtoken'
const jwt = require('jsonwebtoken');

// Importar la clase Pool del módulo 'pg'
const { Pool } = require('pg');

// Importar el módulo 'cors'
const cors = require('cors');

// Crear una instancia de la aplicación de Express
const app = express();

// Definir el número de puerto en el que se ejecutará la aplicación
const port = 5000;

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'calima360.cyydty3tfbz4.us-east-1.rds.amazonaws.com',
  database: 'calima',
  password: 'postgres',
  port: 5432,
});

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());
app.use(cors());

// Ruta de usuarios
app.get('/usuario', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM usuarios'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Ruta para obtener usuarios por su id
app.get('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE id = $1',
      [id]
    );
    const usuario = result.rows[0];
    if (usuario) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// Ruta de registro de usuarios
app.post('/registro', async (req, res) => {
  try {
    const { nombre, apellido, email, contraseña } = req.body;

    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Inserta el usuario en la base de datos
    await pool.query(
      'INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ($1, $2, $3, $4)',
      [nombre, apellido, email, hashedPassword]
    );

    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Busca el usuario en la base de datos por su email
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Compara las contraseñas
    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Genera un token de acceso
    const token = jwt.sign({ userId: user.id }, 'tu_clave_secreta');

    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

//Ruta para actualizar un usuario
app.put('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido } = req.body;

    // Actualizar el usuario en la base de datos
    await pool.query(
      'UPDATE usuarios SET nombre = $1, apellido = $2 WHERE id = $3',
      [nombre, apellido, id]
    );

    res.json({ mensaje: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

// Ruta protegida que requiere autenticación
app.get('/recurso-protegido', verificarToken, (req, res) => {
    res.json({ mensaje: '¡Este es un recurso protegido!' });
  });
  
  // Middleware para verificar el token de autenticación
  function verificarToken(req, res, next) {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }
  
    jwt.verify(token, 'tu_clave_secreta', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido' });
      }
  
      req.userId = decoded.userId;
      next();
    });
  }

// Ruta de cuestionarios
app.get('/cuestionario', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM cuestionario'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los cuestionarios:', error);
    res.status(500).json({ error: 'Error al obtener los cuestionarios' });
  }
});

// Ruta para obtener un solo cuestionario por su id
app.get('/cuestionario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM cuestionario WHERE id = $1',
      [id]
    );
    const cuestionario = result.rows[0];
    if (cuestionario) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Cuestionario no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el cuestionario:', error);
    res.status(500).json({ error: 'Error al obtener el cuestionario' });
  }
});

// Ruta para crear un nuevo cuestionario
app.post('/cuestionario', async (req, res) => {
  try {
    const { nombre, pregunta, opciones } = req.body;

    // Insertar el cuestionario en la base de datos
    const result = await pool.query(
      'INSERT INTO cuestionario (nombre, pregunta, opciones) VALUES ($1, $2, $3) RETURNING id',
      [nombre, pregunta, opciones]
    );

    const cuestionarioId = result.rows[0].id;

    res.status(201).json({ mensaje: 'Cuestionario creado exitosamente', cuestionarioId });
  } catch (error) {
    console.error('Error al crear cuestionario:', error);
    res.status(500).json({ error: 'Error al crear cuestionario' });
  }
});

// Ruta para actualizar un cuestionario
app.put('/cuestionario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, pregunta, opciones } = req.body;

    // Actualizar el cuestionario en la base de datos
    await pool.query(
      'UPDATE cuestionario SET nombre = $1, pregunta = $2, opciones = $3 WHERE id = $4',
      [nombre, pregunta, opciones, id]
    );

    res.json({ mensaje: 'Cuestionario actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar cuestionario:', error);
    res.status(500).json({ error: 'Error al actualizar cuestionario' });
  }
});

//Ruta de usuario_cuestionario
app.get('/usuario_cuestionario', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM usuario_cuestionario'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los registros de usuario_cuestionario:', error);
    res.status(500).json({ error: 'Error al obtener los registros de usuario_cuestionario' });
  }
});

// Ruta para obtener usuario_cuestionario por su id
app.get('/usuario_cuestionario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM usuario_cuestionario WHERE id = $1',
      [id]
    );
    const usuarioCuestionario = result.rows[0];
    if (usuarioCuestionario) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Registro de usuario_cuestionario no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el registro de usuario_cuestionario:', error);
    res.status(500).json({ error: 'Error al obtener el registro de usuario_cuestionario' });
  }
});

// Ruta para asignar un cuestionario a un usuario
app.post('/usuario_cuestionario', async (req, res) => {
  try {
    const { estado, id_usuario, id_cuestionario } = req.body;

    // Insertar la relación usuario-cuestionario en la base de datos
    await pool.query(
      'INSERT INTO usuario_cuestionario (estado, id_usuario, id_cuestionario) VALUES ($1, $2, $3)',
      [estado, id_usuario, id_cuestionario]
    );

    res.status(201).json({ mensaje: 'Relación usuario-cuestionario creada exitosamente' });
  } catch (error) {
    console.error('Error al crear relación usuario-cuestionario:', error);
    res.status(500).json({ error: 'Error al crear relación usuario-cuestionario' });
  }
});

// Ruta para actualizar el estado de los usuario_cuestionario
app.put('/usuario_cuestionario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    // Actualizar la relación usuario-cuestionario en la base de datos
    await pool.query(
      'UPDATE usuario_cuestionario SET estado = $1 WHERE id = $2',
      [estado, id]
    );

    res.json({ mensaje: 'Relación usuario-cuestionario actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar relación usuario-cuestionario:', error);
    res.status(500).json({ error: 'Error al actualizar relación usuario-cuestionario' });
  }
});
  
// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});