import { useEffect } from 'react';
import { create } from 'zustand';
import { fetchPrayers } from '../database/queries/prayersQueries';

const usePrayersStore = create((set) => ({
  prayers: [],
  load: async () => {
    const items = await fetchPrayers();
    set({ prayers: items });
  },
}));

export const usePrayers = () => {
  const { prayers, load } = usePrayersStore();

  useEffect(() => {
    load();
  }, [load]);

  return { prayers };
};
