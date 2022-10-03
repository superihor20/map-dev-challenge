import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';
import { getReadableDate } from '../../../utils/helpers/dates.helpers';

import './divisionDate.scss';

export const divisionDate = (date, browserLanguage) => {
  return createComponent({
    elementType: elementTypes.span,
    child: getReadableDate(date, browserLanguage),
    attributes: {
      class: 'divisionDate',
    },
  });
};
