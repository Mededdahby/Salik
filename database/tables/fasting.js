export const createFastingTable = (tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS fasting_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      type TEXT
    );`
  );
};
