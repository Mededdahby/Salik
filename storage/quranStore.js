import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'quran' });

export const getLastSurah = () => storage.getNumber('lastSurah') || 1;
export const setLastSurah = (surah) => storage.set('lastSurah', surah);
