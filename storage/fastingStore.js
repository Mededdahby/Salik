import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'fasting' });

export const getPreferredFastingDays = () => {
  const stored = storage.getString('days');
  return stored ? JSON.parse(stored) : [];
};

export const setPreferredFastingDays = (days) => storage.set('days', JSON.stringify(days));
