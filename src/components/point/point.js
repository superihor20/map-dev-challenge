import { createComponent } from '../../lib/createComponent';

import './point.scss';

export const point = (lat, lan) => {
  const pointPercentages = convertLatAndLonToPercents(lat, lan);

  return createComponent({
    elementType: elementTypes.div,
    child: null,
    attributes: {
      style: `bottom:${pointPercentages.percLat}%; left: ${pointPercentages.percLon}%;`,
    },
  });
};
