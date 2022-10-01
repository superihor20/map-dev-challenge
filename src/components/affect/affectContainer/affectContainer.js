import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { affectedNumber } from '../affectedNumber/affectedNumber';
import { affectedType } from '../affectedType/affectedType';

import classes from './affectContainer.scss';

export const affectContainer = (type, number) => {
  return createComponent({
    elementType: elementTypes.div,
    child: [affectedType(type), affectedNumber(number)],
    attributes: { class: classes.affectContainer },
  });
};
