export const createCalendarTable = (tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS islamic_calendar (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      gregorian_date TEXT,
      hijri_date TEXT
    );`
  );
};
