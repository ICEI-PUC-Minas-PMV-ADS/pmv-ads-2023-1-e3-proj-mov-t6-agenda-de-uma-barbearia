import * as SQLite from 'expo-sqlite';

const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('beautybook.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists usuario (id integer primary key not null, login text not null, senha text not null);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;
