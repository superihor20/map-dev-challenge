import { createComponent } from '../../lib/createComponent';
import { elementTypes } from '../../utils/constants/elementTypes';

import styles from './affectedNumber.scss';

export const affectedNumber = (amount) => {
  return createComponent({ elementType: elementTypes.h1, child: amount });
};
