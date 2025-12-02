import { useEffect } from 'react';
import { create } from 'zustand';
import { fetchFamilyReminders } from '../database/queries/familyQueries';

const useFamilyStore = create((set) => ({
  reminders: [],
  load: async () => {
    const items = await fetchFamilyReminders();
    set({ reminders: items });
  },
}));

export const useFamilyReminders = () => {
  const { reminders, load } = useFamilyStore();

  useEffect(() => {
    load();
  }, [load]);

  return { reminders };
};
