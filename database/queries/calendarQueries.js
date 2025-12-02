import { getDB } from '../db';

export const fetchCalendar = () =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM islamic_calendar', [], (_, { rows }) => resolve(rows._array), (_, error) => reject(error));
    });
  });
