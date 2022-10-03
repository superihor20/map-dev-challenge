import {
  eastPoint,
  latDiff,
  lonDiff,
  northPoint,
} from '../constants/extremePoints';

// This function should have 100 not 96 neither 99.
// Maybe because I took not the most extreme points of latitude and longitude.
// So I used 96 and 99 instead of 100 for more accurate point placement

export const convertLatAndLonToPercents = (lat, lon) => {
  const pointLatDiff = northPoint.lat - lat;
  const percLat = 96 - (pointLatDiff / latDiff) * 100;

  const pointLonDiff = eastPoint.lon - lon;
  const percLon = 99 - (pointLonDiff / lonDiff) * 100;

  return {
    percLat,
    percLon,
  };
};
