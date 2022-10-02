import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { animateValue } from '../../../utils/helpers/animateValue';

import './affectedNumber.scss';

export const affectedNumber = (number) => {
  const element = createComponent({
    elementType: elementTypes.p,
    child: number,
    attributes: { class: 'affectedNumber' },
  });

  animateValue(element, 0, number, 1000);

  return element;
};
