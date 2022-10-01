import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { divisionDate } from '../divisionDate/divisionDate';

import classes from './divisionItem.scss';

export const divisionItem = (height, date, events) => {
  return createComponent({
    elementType: elementTypes.div,
    child: divisionDate(date),
    attributes: {
      class: classes.divisionItem,
      style: `height: ${height}px`,
    },
    events,
  });
};
