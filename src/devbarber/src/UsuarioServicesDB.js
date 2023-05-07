import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getUsuario = async () => {
  let results = await DB_EXEC(`select * from usuario`);
  //console.log(results);
  return results.rows._array;
}

export const insertUsuario = async (param) => {
  let results = await DB_EXEC(`insert into usuario(usuario,senha)
  values(?,?)`, [param.usuario, param.senha]);
  //console.log(results);
  return results.rowsAffected;
}

export const updateUsuario = async (param) => {
  let results = await DB_EXEC(`update usuario set senha=?
  where id=?`, [param.senha]);
  //console.log(results);
  return results.rowsAffected;
}

export const deleteUsuario = async (id) => {
  let results = await DB_EXEC(`delete from usuario where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}