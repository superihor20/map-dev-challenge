import { appendChild, getElement, getElements } from './lib/dom';
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
import { button } from './components/button/button';
import { ukraine } from './components/Ukraine/Ukraine';
import { contentWrapper } from './components/contentWrapper/contentWrapper';
import { point } from './components/point/point';
import { getBrowserLanguage } from './utils/helpers/getBrowserLanguage';

import './assets/styles/index.scss';

import events from './data/events.json';
import names from './data/names.json';

const intervalTime = 5000;
const maxDivisionHeight = 60;
const browserLanguage = getBrowserLanguage();
const eventsForTheLast100Days = getEventsForTheLast100Days(events);
const goupedSortedByDateEvents = Object.entries(
  groupEventsByDate(eventsForTheLast100Days)
).sort();
const maxNumberOfEvents = Math.max(
  ...goupedSortedByDateEvents.map(([, event]) =>
    calculateNumberOfEventsInOneDate(event)
  )
);
const divisionsData = goupedSortedByDateEvents.map(([date, events]) => ({
  height:
    (calculateNumberOfEventsInOneDate(events) / maxNumberOfEvents) *
    maxDivisionHeight,
  date: normalizeDate(new Date(+date)),
}));
const groupedByDateAndAffectedType = groupByAffectedType(
  goupedSortedByDateEvents
);
const allAffects = Object.entries(groupedByDateAndAffectedType);
let activeDivision = 0;
let activeAffect = allAffects[activeDivision];
let intervalId;
let buttonStatus = 'paused';

(() => {
  try {
    const root = getElement('#root');
    const MainTitle = mainTitle('Crime topography');
    const Affects = affectsList(
      Object.entries(activeAffect[1]).map(([type, number]) => {
        return affectContainer(
          names[browserLanguage].affected_type[type],
          number
        );
      })
    );

    const handleActiveDivision = (index) => {
      activeDivision = index;
      activeAffect = allAffects[activeDivision];
      const points = goupedSortedByDateEvents[activeDivision][1];
      Affects.innerHTML = '';

      appendChild(
        Affects,
        Object.entries(activeAffect[1]).map(([type, number]) => {
          return affectContainer(
            names[browserLanguage].affected_type[type],
            number
          );
        })
      );

      getElement('.divisionItemActive')?.classList?.remove(
        'divisionItemActive'
      );

      getElement('.divisionsList').childNodes?.[activeDivision]?.classList?.add(
        'divisionItemActive'
      );

      getElements('.point').forEach((e) => e.remove());

      appendChild(
        getElement('.Ukraine'),
        points.map((e) => point(e.lat, e.lon))
      );
    };

    const DivisionsList = divisionsList(
      divisionsData,
      activeDivision,
      handleActiveDivision
    );

    const startInterval = () => {
      if (!intervalId) {
        intervalId = setInterval(change, intervalTime);
      }
    };

    const stopInterval = () => {
      clearInterval(intervalId);

      intervalId = null;
    };

    const PlayButton = button(
      null,
      {
        click: () => {
          buttonStatus === 'paused' ? startInterval() : stopInterval();
          buttonStatus = buttonStatus === 'paused' ? 'playing' : 'paused';
          PlayButton.setAttribute('data-status', buttonStatus);
        },
      },
      buttonStatus
    );

    const change = () => {
      const newActiveIndex = activeDivision + 1;
      handleActiveDivision(newActiveIndex);

      if (newActiveIndex >= allAffects.length - 1) {
        clearInterval(intervalId);
        buttonStatus = 'paused';
        PlayButton.setAttribute('data-status', buttonStatus);
        return;
      }
    };

    const Ukraine = ukraine([
      PlayButton,
      ...goupedSortedByDateEvents[activeDivision][1].map((e) =>
        point(e.lat, e.lon)
      ),
    ]);
    const ContentWrapper = contentWrapper([Affects, Ukraine]);
    const MainWrapper = mainWrapper([MainTitle, ContentWrapper, DivisionsList]);

    appendChild(root, MainWrapper);
  } catch (error) {
    console.error(error);
  }
})();
