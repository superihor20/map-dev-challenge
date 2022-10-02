import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { divisionDate } from '../divisionDate/divisionDate';

import './divisionItem.scss';

export const divisionItem = (height, date, events) => {
  return createComponent({
    elementType: elementTypes.div,
    child: divisionDate(date),
    attributes: {
      class: 'divisionItem',
      style: `height: ${height}px`,
    },
    events,
  });
};
