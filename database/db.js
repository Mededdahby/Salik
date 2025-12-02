import * as SQLite from 'expo-sqlite';

export const getDB = () => SQLite.openDatabase('salik.db');
