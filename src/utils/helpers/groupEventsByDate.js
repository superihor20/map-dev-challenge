import { getMs, getRangeOfDates } from './dates.helpers';

export const groupEventsByDate = (events) => {
  const eventsGroupedByDate = {};

  events.forEach((event) => {
    getRangeOfDates(event.from, event.till).forEach((date) => {
      const inMs = getMs(date);

      if (inMs in eventsGroupedByDate) {
        eventsGroupedByDate[inMs].push(event);
        return;
      }

      eventsGroupedByDate[inMs] = [event];
    });
  });

  return eventsGroupedByDate;
};
