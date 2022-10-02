import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';

import './affectedType.scss';

export const affectedType = (type) => {
  return createComponent({
    elementType: elementTypes.p,
    child: type,
    attributes: { class: 'affectedType' },
  });
};
