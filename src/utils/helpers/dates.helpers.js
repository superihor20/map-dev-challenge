import { months, oneDayInMs } from '../constants/dates.constants';

export const getMs = (date) => {
  return new Date(date).getTime();
};

export const getYear = (date) => {
  return new Date(date).getFullYear();
};

export const getDate = (date) => {
  return new Date(date).getDate();
};

export const getMonth = (date) => {
  return new Date(date).getMonth() + 1;
};

export const getMonthName = (month, lang = 'en') => {
  return months[lang][month];
};

export const normalizeDate = (date) => {
  return `${getYear(date)}-${getMonth(date)}-${getDate(date)}`;
};

export const getRangeOfDates = (from, to) => {
  const dates = [];
  const toInMs = getMs(to);
  let currInMs = getMs(from);

  do {
    const normalizedDate = normalizeDate(currInMs);

    dates.push(normalizedDate);
    currInMs += oneDayInMs;
  } while (currInMs <= toInMs);

  return dates;
};

export const subtractDaysFromNowDate = (numberOfDaysToSubstract) => {
  if (typeof numberOfDaysToSubstract !== 'number') {
    throw new Error('You should path numbers only');
  }

  const now = new Date();
  now.setDate(now.getDate() - numberOfDaysToSubstract);
  now.setHours(0, 0, 0, 0);

  return now;
};

export const getReadableDate = (unreadebleDate, lang) => {
  const date = new Date(unreadebleDate);

  return `${getDate(date)} ${getMonthName(getMonth(date), lang)}, ${getYear(
    date
  )}`;
};
