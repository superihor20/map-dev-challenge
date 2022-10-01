import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';

import classes from './affectsList.scss';

export const affectsList = (affects) => {
  return createComponent({
    elementType: elementTypes.div,
    child: affects,
    attributes: { class: classes.affectsList },
  });
};
