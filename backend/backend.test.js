const request = require('supertest');
const app = require('./index');
// Importar el módulo 'jsonwebtoken'
const jwt = require('jsonwebtoken');

var id = 0;
var id2 = 0;

describe('Pruebas funcionales de las rutas de usuario', () => {
  jest.setTimeout(20000);
  // Prueba para la ruta '/registro'
  it('Debería registrar un nuevo usuario', async () => {
    const usuario = {
      nombre: 'Deiby',
      apellido: 'Rodriguez',
      email: 'test@correodeprueba.com',
      contraseña: '12345'
    };
    const response = await request(app).post('/registro').send(usuario);
    expect(response.statusCode).toBe(201);
    expect(response.body).toBeDefined();
  });

  // Prueba para la ruta '/login'
  it('Debería ingresar como un usuario', async () => {
    const usuario = {
      email: 'test@correodeprueba.com',
      contraseña: '12345'
    };
    const response = await request(app).post('/login').send(usuario);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    await jwt.verify(response.body.token, 'tu_clave_secreta', (err, decoded) => {
      id = decoded['userId'];
    });
  });

  // Prueba para la ruta '/usuario'
  it('Debería obtener la lista de usuarios', async () => {
    const response = await request(app).get('/usuario');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });

  // Prueba para la ruta '/usuario/:id'
  it('Debería obtener un usuario por su id', async () => {
    const response = await request(app).get(`/usuario/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });

  // Prueba para la ruta '/usuario/:id'
  it('Debería eliminar un usuario por su id', async () => {
    const response = await request(app).delete(`/usuario/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});

describe('Pruebas funcionales de las rutas de cuestionario', () => {
  jest.setTimeout(20000);
  // Prueba para la ruta '/cuestionario'
  it('Debería registrar un nuevo cuestionario', async () => {
    const cuestionario = {
      nombre: "Pregunta 4 Historia",
      pregunta: "¿Cuál era el propósito principal de las tumbas en esta cultura?",
      opciones: [
        {
          "value": "-1",
          "opcion": "Servir como lugar de descanso eterno."
        },
        {
          "value": "0",
          "opcion": "Proporcionar recursos necesarios para el viaje al más allá."
        },
        {
          "value": "-1",
          "opcion": "Preservar los órganos sexuales femeninos."
        },
        {
          "value": "-1",
          "opcion": "Establecer la conexión con los dioses."
        }
      ],
      tipo: "Prueba Funcional"
    };
    const response = await request(app).post('/cuestionario').send(cuestionario);
    expect(response.statusCode).toBe(201);
    expect(response.body).toBeDefined();
  });

  // Prueba para la ruta '/cuestionario'
  it('Debería obtener la lista de cuestionarios', async () => {
    const response = await request(app).get('/cuestionario');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});

describe('Pruebas funcionales de las rutas de usuario_cuestionario', () => {
  jest.setTimeout(20000);
  // Prueba para la ruta '/registro'
  it('Debería registrar un nuevo usuario', async () => {
    const usuario = {
      nombre: 'Deiby',
      apellido: 'Rodriguez',
      email: 'test@correodeprueba.com',
      contraseña: '12345'
    };
    const response = await request(app).post('/registro').send(usuario);
    expect(response.statusCode).toBe(201);
    expect(response.body).toBeDefined();
  });

  // Prueba para la ruta '/login'
  it('Debería ingresar como un usuario', async () => {
    const usuario = {
      email: 'test@correodeprueba.com',
      contraseña: '12345'
    };
    const response = await request(app).post('/login').send(usuario);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    await jwt.verify(response.body.token, 'tu_clave_secreta', (err, decoded) => {
      id2 = decoded['userId'];
    });
  });
  // Prueba para la ruta '/usuario_cuestionario'
  it('Debería registrar un nuevo usuario_cuestionario', async () => {
    const usuario_cuestionario = {
      estado: 0,
      id_usuario: id2,
      id_cuestionario: 6
    };
    const response = await request(app).post('/usuario_cuestionario').send(usuario_cuestionario);
    expect(response.statusCode).toBe(201);
    expect(response.body).toBeDefined();
  });

  // Prueba para la ruta '/usuario_cuestionario'
  it('Debería obtener la lista de usuario_cuestionario', async () => {
    const response = await request(app).get('/usuario_cuestionario');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });

  // Prueba para la ruta '/usuario/:id'
  it('Debería eliminar un usuario por su id', async () => {
    const response = await request(app).delete(`/usuario/${id2}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});