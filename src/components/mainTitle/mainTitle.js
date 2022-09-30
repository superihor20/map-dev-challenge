import { createComponent } from '../../lib/createComponent';
import { elementTypes } from '../../utils/constants/elementTypes';

import classes from './mainTitle.scss';

export const mainTitle = (text) => {
  return createComponent({
    elementType: elementTypes.h1,
    child: text,
    attributes: { class: classes.mainTitle },
  });
};
