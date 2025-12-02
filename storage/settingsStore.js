import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'settings' });

export const getSetting = (key, defaultValue) => {
  if (!storage.contains(key)) return defaultValue;
  const value = storage.getString(key);
  try {
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

export const setSetting = (key, value) => storage.set(key, JSON.stringify(value));
