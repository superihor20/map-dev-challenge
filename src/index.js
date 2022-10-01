import { appendChild, getElement } from './lib/dom';
import { mainWrapper } from './components/mainWrapper/mainWrapper';
import { mainTitle } from './components/mainTitle/mainTitle';
import { affectedNumber } from './components/affectedNumber/affectedNumber';
import { affectedType } from './components/affectedType/affectedType';
import { getEventsForTheLast100Days } from './utils/helpers/getEventsForTheLast100Days';
import { groupEventsByDate } from './utils/helpers/groupEventsByDate';
import { divisionsList } from './components/division/divisionsList/divisionsList';
import { normalizeDate } from './utils/helpers/dates.helpers';
import { calculateNumberOfEventsInOneDate } from './utils/helpers/calculateNumberOfEventsInOneDate';

import './assets/styles/index.scss';

import events from './data/events.json';
import { groupByAffectedType } from './utils/helpers/groupByAffectedType';

const maxDivisionHeight = 60;
const eventsForTheLast100Days = getEventsForTheLast100Days(events);
const goupedSortedByDateEvents = Object.fromEntries(
  Object.entries(groupEventsByDate(eventsForTheLast100Days)).sort()
);

const maxNumberOfEvents = Math.max(
  ...Object.values(goupedSortedByDateEvents).map(
    calculateNumberOfEventsInOneDate
  )
);

const divisionsData = Object.entries(goupedSortedByDateEvents).map(
  ([date, events]) => ({
    height:
      (calculateNumberOfEventsInOneDate(events) / maxNumberOfEvents) *
      maxDivisionHeight,
    date: normalizeDate(new Date(+date)),
  })
);

const groupedByDateAndAffectedType = groupByAffectedType(
  goupedSortedByDateEvents
);

console.log(groupedByDateAndAffectedType);

(() => {
  try {
    const root = getElement('#root');

    const MainTitle = mainTitle('Crime topography');
    const AffectedNumber = affectedNumber(1234);
    const AffectedType = affectedType('Killed Militarists');
    const DivisionsList = divisionsList(divisionsData);

    const MainWrapper = mainWrapper([
      MainTitle,
      AffectedNumber,
      AffectedType,
      DivisionsList,
    ]);

    appendChild(root, MainWrapper);
  } catch (error) {
    console.error(error);
  }
})();
