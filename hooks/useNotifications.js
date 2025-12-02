import { useEffect } from 'react';
import { create } from 'zustand';
import { requestPermissions, scheduleDailyReminder } from '../services/notifications';

const useNotificationsStore = create((set) => ({
  granted: false,
  initialize: async () => {
    const status = await requestPermissions();
    set({ granted: status });
  },
  schedule: async () => {
    await scheduleDailyReminder();
  },
}));

export const useNotifications = () => {
  const { granted, initialize, schedule } = useNotificationsStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return { granted, schedule };
};
