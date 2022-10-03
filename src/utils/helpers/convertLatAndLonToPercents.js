import {
  eastPoint,
  latDiff,
  lonDiff,
  northPoint,
} from '../constants/extremePoints';

export const convertLatAndLonToPercents = (lat, lon) => {
  const pointLatDiff = northPoint.lat - lat;
  const percLat = 100 - (pointLatDiff / latDiff) * 100;

  const pointLonDiff = eastPoint.lon - lon;
  const percLon = 100 - (pointLonDiff / lonDiff) * 100;

  return {
    percLat,
    percLon,
  };
};
