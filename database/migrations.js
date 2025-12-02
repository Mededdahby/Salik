import { getDB } from './db';
import { createPrayersTable } from './tables/prayers';
import { createFastingTable } from './tables/fasting';
import { createFamilyTable } from './tables/family';
import { createCreditsTable } from './tables/credits';
import { createCalendarTable } from './tables/calendar';
import { createAdhkarTable } from './tables/adhkar';
import { createQuranTable } from './tables/quran';

export const runMigrations = () => {
  const db = getDB();
  db.transaction((tx) => {
    createPrayersTable(tx);
    createFastingTable(tx);
    createFamilyTable(tx);
    createCreditsTable(tx);
    createCalendarTable(tx);
    createAdhkarTable(tx);
    createQuranTable(tx);
  });
};
