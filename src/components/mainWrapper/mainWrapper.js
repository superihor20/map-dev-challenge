import { createComponent } from '../../lib/createComponent';
import { elementTypes } from '../../utils/constants/elementTypes';

import classes from './mainWrapper.scss';

export const mainWrapper = (child) => {
  return createComponent({
    elementType: elementTypes.div,
    child,
    attributes: { class: classes.mainWrapper },
  });
};
