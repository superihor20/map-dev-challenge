import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { divisionItem } from '../divisionItem/divisionItem';

import classes from './divisionsList.scss';

export const divisionsList = (divisions, onClick) => {
  return createComponent({
    elementType: elementTypes.p,
    child: divisions.map(({ height, date }, index) =>
      divisionItem(height, date, { click: () => onClick(index) })
    ),
    attributes: {
      class: classes.divisionsList,
    },
  });
};
