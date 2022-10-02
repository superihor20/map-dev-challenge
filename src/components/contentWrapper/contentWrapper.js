import { createComponent } from '../../lib/createComponent';
import { elementTypes } from '../../utils/constants/elementTypes';

import './contentWrapper.scss';

export const contentWrapper = (chilren) => {
  return createComponent({
    elementType: elementTypes.div,
    child: chilren,
    attributes: {
      class: 'contentWrapper',
    },
  });
};
