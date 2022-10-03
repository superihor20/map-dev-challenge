import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { getBrowserLanguage } from '../../../utils/helpers/getBrowserLanguage';
import { divisionItem } from '../divisionItem/divisionItem';

import './divisionsList.scss';

export const divisionsList = (divisions, activeDivision, click) => {
  const browserLanguage = getBrowserLanguage();

  return createComponent({
    elementType: elementTypes.div,
    child: divisions.map(({ height, date }, index) =>
      divisionItem(
        height,
        date,
        index === activeDivision,
        {
          click: () => click(index),
        },
        browserLanguage
      )
    ),
    attributes: {
      class: 'divisionsList',
    },
  });
};
