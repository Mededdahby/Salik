import { useEffect } from 'react';
import { create } from 'zustand';
import { fetchCredits } from '../database/queries/creditQueries';

const useCreditsStore = create((set) => ({
  credits: [],
  load: async () => {
    const items = await fetchCredits();
    set({ credits: items });
  },
}));

export const useCredits = () => {
  const { credits, load } = useCreditsStore();

  useEffect(() => {
    load();
  }, [load]);

  return { credits };
};
