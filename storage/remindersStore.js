import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'reminders' });

export const getReminderPreference = (key, defaultValue = false) => {
  if (!storage.contains(key)) return defaultValue;
  return storage.getBoolean(key);
};

export const setReminderPreference = (key, value) => storage.set(key, value);
