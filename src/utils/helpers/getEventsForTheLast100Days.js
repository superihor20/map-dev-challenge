import { getMs, subtractDaysFromNowDate } from './dates.helpers';

export const getEventsForTheLast100Days = (events) => {
  const dateOneHundredDaysAgoInMs = getMs(subtractDaysFromNowDate(100));
  const neededEvents = [];

  for (let i = 0; i < events.length; i++) {
    const currentEvent = events[i];

    if (getMs(currentEvent.from) > dateOneHundredDaysAgoInMs) {
      neededEvents.push(currentEvent);

      continue;
    }

    break;
  }

  return neededEvents;
};
