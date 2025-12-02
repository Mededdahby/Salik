import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'adhkar' });

export const getLastAdhkarCategory = () => storage.getString('category') || 'morning';
export const setLastAdhkarCategory = (category) => storage.set('category', category);
