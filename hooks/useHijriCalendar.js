import { useEffect } from 'react';
import { create } from 'zustand';
import { fetchCalendar } from '../database/queries/calendarQueries';

const useCalendarStore = create((set) => ({
  entries: [],
  load: async () => {
    const items = await fetchCalendar();
    set({ entries: items });
  },
}));

export const useHijriCalendar = () => {
  const { entries, load } = useCalendarStore();

  useEffect(() => {
    load();
  }, [load]);

  return { entries };
};
