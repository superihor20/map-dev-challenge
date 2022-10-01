import { getMs, getRangeOfDates } from './dates.helpers';

export const groupEventsByDate = (events) => {
  const eventsGroupedByDate = {};

  events.forEach((event) => {
    getRangeOfDates(event.from, event.till).forEach((date) => {
      const inMs = getMs(date);
      const eventWithDateWhenItsHappened = { ...event, date };

      if (inMs in eventsGroupedByDate) {
        eventsGroupedByDate[inMs].push(eventWithDateWhenItsHappened);
        return;
      }

      eventsGroupedByDate[inMs] = [eventWithDateWhenItsHappened];
    });
  });

  return eventsGroupedByDate;
};
