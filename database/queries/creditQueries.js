import { getDB } from '../db';

export const fetchCredits = () =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM credits', [], (_, { rows }) => resolve(rows._array), (_, error) => reject(error));
    });
  });
