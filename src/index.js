import { appendChild, getElement } from './lib/dom';
import { mainWrapper } from './components/mainWrapper/mainWrapper';
import { mainTitle } from './components/mainTitle/mainTitle';
import { affectedNumber } from './components/affectedNumber/affectedNumber';
import { affectedType } from './components/affectedType/affectedType';
import { getMs } from './utils/helpers/dates.helpers';
import { getEventsForTheLast100Days } from './utils/helpers/getEventsForTheLast100Days';
import { sorting } from './utils/helpers/sorting';

import './assets/styles/index.scss';

import events from './data/events.json';

const eventsForTheLast100Days = getEventsForTheLast100Days(
  sorting(events, 'desc', 'from', getMs)
);

console.log(events, eventsForTheLast100Days);

(() => {
  try {
    const root = getElement('#root');

    const MainTitle = mainTitle('Crime topography');
    const AffectedNumber = affectedNumber(1234);
    const AffectedType = affectedType('Killed Militarists');
    const MainWrapper = mainWrapper([MainTitle, AffectedNumber, AffectedType]);

    appendChild(root, MainWrapper);
  } catch (error) {
    console.error(error);
  }
})();
