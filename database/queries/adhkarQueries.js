import { getDB } from '../db';

export const fetchAdhkarLog = () =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM adhkar_log', [], (_, { rows }) => resolve(rows._array), (_, error) => reject(error));
    });
  });
