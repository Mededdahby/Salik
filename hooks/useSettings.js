import { useEffect } from 'react';
import { create } from 'zustand';
import { getSetting, setSetting } from '../storage/settingsStore';

const useSettingsStore = create((set) => ({
  language: 'en',
  theme: 'dark',
  notifications: true,
  load: () => {
    set({
      language: getSetting('language', 'en'),
      theme: getSetting('theme', 'dark'),
      notifications: getSetting('notifications', true),
    });
  },
  updateSetting: (key, value) => {
    set((state) => ({ ...state, [key]: value }));
    setSetting(key, value);
  },
}));

export const useSettings = () => {
  const { language, theme, notifications, load, updateSetting } = useSettingsStore();

  useEffect(() => {
    load();
  }, [load]);

  return { language, theme, notifications, updateSetting };
};
