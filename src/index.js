import { appendChild, getElement } from './lib/dom';
import { mainWrapper } from './components/mainWrapper/mainWrapper';
import { mainTitle } from './components/mainTitle/mainTitle';
import { affectedNumber } from './components/affectedNumber/affectedNumber';
import { affectedType } from './components/affectedType/affectedType';

import data from './data/names.json';
console.log(data);

import './assets/styles/index.scss';

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
