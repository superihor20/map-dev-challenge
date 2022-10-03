import { getMs, normalizeDate, subtractDaysFromNowDate } from './dates.helpers';

export const getEventsForTheLastNDays = (events, numberOfDays) => {
  const dateOneHundredDaysAgoInMs = getMs(
    subtractDaysFromNowDate(numberOfDays)
  );
  const suitableEvents = [];

  for (const event of events) {
    if (!('affected_type' in event) || !('lat' in event) || !('lon' in event)) {
      continue;
    }

    if (getMs(event.from) > dateOneHundredDaysAgoInMs) {
      suitableEvents.push({ ...event });
      continue;
    }

    if (getMs(event.till) > dateOneHundredDaysAgoInMs) {
      suitableEvents.push({
        ...event,
        from: normalizeDate(dateOneHundredDaysAgoInMs),
      });
    }
  }

  return suitableEvents;
};
