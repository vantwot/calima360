const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
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
    const result = await pool.query(
        'SELECT * FROM usuarios'
    );
    res.json({ result });
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
  
  // Inicia el servidor
  app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });