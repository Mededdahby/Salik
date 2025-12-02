export const createQuranTable = (tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS quran_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      surah INTEGER,
      ayah INTEGER,
      updated_at TEXT
    );`
  );
};
