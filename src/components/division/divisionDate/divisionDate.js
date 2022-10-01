import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';

import classes from './divisionDate.scss';

export const divisionDate = (date) => {
  return createComponent({
    elementType: elementTypes.span,
    child: date,
    attributes: {
      class: classes.divisionDate,
    },
  });
};
