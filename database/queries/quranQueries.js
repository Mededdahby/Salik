import { getDB } from '../db';

export const fetchQuranProgress = () =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM quran_progress', [], (_, { rows }) => resolve(rows._array), (_, error) => reject(error));
    });
  });
