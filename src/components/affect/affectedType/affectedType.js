import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';

import classes from './affectedType.scss';

export const affectedType = (type) => {
  return createComponent({
    elementType: elementTypes.p,
    child: type,
    attributes: { class: classes.affectedType },
  });
};
