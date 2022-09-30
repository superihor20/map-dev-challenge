import { getMs, subtractDaysFromNowDate } from './dates.helpers';

export const getEventsForTheLast100Days = (events) => {
  const dateOneHundredDaysAgoInMs = getMs(subtractDaysFromNowDate(100));

  return events.filter(
    ({ from, till }) =>
      getMs(from) > dateOneHundredDaysAgoInMs ||
      getMs(till) > dateOneHundredDaysAgoInMs
  );
};
