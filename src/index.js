import { appendChild, getElement } from './lib/dom';
import { mainWrapper } from './components/mainWrapper/mainWrapper';
import { mainTitle } from './components/mainTitle/mainTitle';
import { getEventsForTheLast100Days } from './utils/helpers/getEventsForTheLast100Days';
import { groupEventsByDate } from './utils/helpers/groupEventsByDate';
import { divisionsList } from './components/division/divisionsList/divisionsList';
import { normalizeDate } from './utils/helpers/dates.helpers';
import { calculateNumberOfEventsInOneDate } from './utils/helpers/calculateNumberOfEventsInOneDate';
import { groupByAffectedType } from './utils/helpers/groupByAffectedType';
import { affectsList } from './components/affect/affectsList/affectsList';
import { affectContainer } from './components/affect/affectContainer/affectContainer';

import './assets/styles/index.scss';

import events from './data/events.json';
import names from './data/names.json';

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

const allAffects = Object.entries(groupedByDateAndAffectedType);
let activeDateIndex = 0;
let activeAffect = allAffects[activeDateIndex];

(() => {
  try {
    const root = getElement('#root');
    const MainTitle = mainTitle('Crime topography');
    const Affects = affectsList(
      Object.entries(activeAffect[1]).map(([type, number]) => {
        return affectContainer(names.en.affected_type[type], number);
      })
    );

    const handleActiveDivision = (index) => {
      activeDateIndex = index;
      activeAffect = allAffects[activeDateIndex];
      Affects.innerHTML = '';

      appendChild(
        Affects,
        Object.entries(activeAffect[1]).map(([type, number]) => {
          return affectContainer(names.en.affected_type[type], number);
        })
      );
    };

    const DivisionsList = divisionsList(divisionsData, handleActiveDivision);

    const MainWrapper = mainWrapper([MainTitle, Affects, DivisionsList]);

    appendChild(root, MainWrapper);
  } catch (error) {
    console.error(error);
  }
})();
