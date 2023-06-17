const request = require('supertest');
const app = require('./index');
// Importar el módulo 'jsonwebtoken'
const jwt = require('jsonwebtoken');

var id = 0;

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
    // Aquí puedes agregar más aserciones para verificar la respuesta
  });

  // Prueba para la ruta '/usuario/:id'
  it('Debería obtener un usuario por su id', async () => {
    const response = await request(app).get(`/usuario/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    // Aquí puedes agregar más aserciones para verificar la respuesta
  });

  // Prueba para la ruta '/usuario/:id'
  it('Debería eliminar un usuario por su id', async () => {
    const response = await request(app).delete(`/usuario/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    // Aquí puedes agregar más aserciones para verificar la respuesta
  });
});