export const createAdhkarTable = (tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS adhkar_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT,
      dhikr_id INTEGER,
      completed_at TEXT
    );`
  );
};
