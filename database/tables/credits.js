export const createCreditsTable = (tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS credits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      amount REAL,
      due_date TEXT
    );`
  );
};
