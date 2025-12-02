import { useEffect, useState } from 'react';
import surah001 from '../data/quran/surah001.json';

const surahs = [{ id: 1, name: surah001.name, verses: surah001.verses.length, data: surah001 }];

export const useQuran = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(surahs);
  }, []);

  return { list };
};
