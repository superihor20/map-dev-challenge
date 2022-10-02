import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { divisionItem } from '../divisionItem/divisionItem';

import './divisionsList.scss';

export const divisionsList = (divisions, activeDivision) => {
  return createComponent({
    elementType: elementTypes.div,
    child: divisions.map(({ height, date }, index) =>
      divisionItem(height, date, index === activeDivision)
    ),
    attributes: {
      class: 'divisionsList',
    },
  });
};
