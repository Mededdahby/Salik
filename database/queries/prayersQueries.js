import { getDB } from '../db';

export const fetchPrayers = () =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM prayers_log',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
