import { useEffect, useState } from 'react';
import morning from '../data/adhkar/morning.json';
import evening from '../data/adhkar/evening.json';
import sleep from '../data/adhkar/sleep.json';
import afterPrayer from '../data/adhkar/after_prayer.json';

const sources = { morning, evening, sleep, after_prayer: afterPrayer };

export const useAdhkar = (category = 'morning') => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(sources[category] || []);
  }, [category]);

  return { items };
};
