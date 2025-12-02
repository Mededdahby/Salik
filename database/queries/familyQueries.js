import { getDB } from '../db';

export const fetchFamilyReminders = () =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM family_reminders', [], (_, { rows }) => resolve(rows._array), (_, error) => reject(error));
    });
  });
