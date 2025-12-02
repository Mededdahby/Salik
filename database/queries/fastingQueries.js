import { getDB } from '../db';

export const fetchFastingLog = () =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM fasting_log', [], (_, { rows }) => resolve(rows._array), (_, error) => reject(error));
    });
  });
