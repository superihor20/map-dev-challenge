import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { divisionItem } from '../divisionItem/divisionItem';

import classes from './divisionsList.scss';

export const divisionsList = (divisions) => {
  return createComponent({
    elementType: elementTypes.div,
    child: divisions.map(({ height, date }) => divisionItem(height, date)),
    attributes: {
      class: classes.divisionsList,
    },
  });
};
