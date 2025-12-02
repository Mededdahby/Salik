export const createFamilyTable = (tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS family_reminders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      relation TEXT,
      reminder_date TEXT
    );`
  );
};
