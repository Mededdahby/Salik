import months from '../data/hijri/months.json';

export const toHijri = (date = new Date()) => {
  const day = date.getDate();
  const month = months[date.getMonth() % months.length];
  const year = 1445 + (date.getFullYear() - 2024);
  return { day, month, year };
};
