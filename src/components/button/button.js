import { createComponent } from '../../lib/createComponent';
import { elementTypes } from '../../utils/constants/elementTypes';

import classes from './button.scss';

export const button = (text, events, isPlaying) => {
  return createComponent({
    elementType: elementTypes.button,
    child: text,
    attributes: {
      class: `${classes.button}`,
      type: 'button',
      'data-status': isPlaying,
    },
    events,
  });
};
