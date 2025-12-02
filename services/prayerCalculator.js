import { prayerNames } from '../constants/prayerNames';

export const getNextPrayer = () => {
  const now = new Date();
  const index = now.getHours() % prayerNames.length;
  return prayerNames[index];
};
