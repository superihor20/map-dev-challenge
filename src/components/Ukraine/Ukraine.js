import { createComponent } from '../../lib/createComponent';
import { elementTypes } from '../../utils/constants/elementTypes';
import UkraineSVG from '../../assets/icons/ukraine.svg';

import './Ukraine.scss';

export const ukraine = (child) => {
  return createComponent({
    elementType: elementTypes.div,
    child: [
      createComponent({
        elementType: elementTypes.img,
        child: null,
        attributes: {
          src: UkraineSVG,
          alt: 'Map of Ukraine',
        },
      }),
      ...(Array.isArray(child) ? child : [child]),
    ],
    attributes: {
      class: 'Ukraine',
    },
  });
};
