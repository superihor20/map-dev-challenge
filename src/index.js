import './styles/index.scss';
import { appendChild, getElement } from './lib/dom';
import { mainWrapper } from './components/mainWrapper/mainWrapper';
import { mainTitle } from './components/mainTitle/mainTitle';
import { affectedNumber } from './components/affectedNumber/affectedNumber';

(() => {
  try {
    const root = getElement('#root');

    const MainTitle = mainTitle('Crime topography');
    const AffectedNumber = affectedNumber(1234);
    const MainWrapper = mainWrapper([MainTitle, AffectedNumber]);

    appendChild(root, MainWrapper);
  } catch (error) {
    console.error(error);
  }
})();
