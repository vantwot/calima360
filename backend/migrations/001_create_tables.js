/*  
  *  @author <deiby.rodriguez@correounivalle.edu.co>  
  *  @version 0.0.1
**/
/*
  Este archivo contiene las migraciones necesarias para actualizar o crear las tablas en la bd.
*/

exports.up = (pgm) => {
  pgm.createTable('usuarios', {
    id: { type: 'serial', primaryKey: true },
    nombre: { type: 'varchar(255)', notNull: true },
    apellido: { type: 'varchar(255)', notNull: true },
    email: { type: 'varchar(255)', notNull: true, unique: true },
    contraseña: { type: 'varchar(255)', notNull: true },
    foto: { type: 'bytea', notNull: false }
  }, {ifNotExists: true});

  pgm.createTable('cuestionario', {
    id: { type: 'serial', primaryKey: true },
    nombre: { type: 'varchar(255)', notNull: true },
    pregunta: { type: 'varchar(255)', notNull: true },
    opciones: { type: 'jsonb[]' }
  }, {ifNotExists: true});

  pgm.createTable('usuario_cuestionario', {
    id: { type: 'serial', primaryKey: true },
    estado: { type: 'varchar(255)', notNull: true },
    id_usuario: {
      type: 'integer',
      notNull: true,
      references: 'usuarios(id)',
      onDelete: 'cascade'
    },
    id_cuestionario: {
      type: 'integer',
      notNull: true,
      references: 'cuestionario(id)',
      onDelete: 'cascade'
    }
  }, {ifNotExists: true});
};

exports.down = (pgm) => {
  pgm.dropTable('usuario_cuestionario');
  pgm.dropTable('cuestionario');
  pgm.dropTable('usuarios');
};