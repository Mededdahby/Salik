export const createPrayersTable = (tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS prayers_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      prayer_name TEXT NOT NULL,
      prayed_at TEXT,
      status TEXT
    );`
  );
};
