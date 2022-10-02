import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';

import './affectsList.scss';

export const affectsList = (affects) => {
  return createComponent({
    elementType: elementTypes.div,
    child: affects,
    attributes: { class: 'affectsList' },
  });
};
