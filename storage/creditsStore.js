import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'credits' });

export const getCreditSummary = () => {
  const stored = storage.getString('summary');
  return stored ? JSON.parse(stored) : { total: 0 };
};

export const setCreditSummary = (summary) => storage.set('summary', JSON.stringify(summary));
