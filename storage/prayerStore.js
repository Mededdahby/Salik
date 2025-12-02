import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'prayers' });

export const getLastPrayer = () => storage.getString('last') || '';
export const setLastPrayer = (name) => storage.set('last', name);
