import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'calendar' });

export const getLastHijriDate = () => storage.getString('lastHijri') || '';
export const setLastHijriDate = (date) => storage.set('lastHijri', date);
