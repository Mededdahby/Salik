import { useEffect } from 'react';
import { create } from 'zustand';
import { fetchFastingLog } from '../database/queries/fastingQueries';

const useFastingStore = create((set) => ({
  logs: [],
  load: async () => {
    const items = await fetchFastingLog();
    set({ logs: items });
  },
}));

export const useFasting = () => {
  const { logs, load } = useFastingStore();

  useEffect(() => {
    load();
  }, [load]);

  return { logs };
};
