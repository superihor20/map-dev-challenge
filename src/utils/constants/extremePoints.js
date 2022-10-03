export const westPoint = Object.freeze({
  lat: 48.2509,
  lon: 22.0814,
}); // Solomonovo

export const eastPoint = Object.freeze({
  lat: 49.1538,
  lon: 40.1341,
}); // Rannyaya Zorya

export const northPoint = Object.freeze({
  lat: 52.2245,
  lon: 33.1121,
}); // Gremyach

export const southPoint = Object.freeze({
  lat: 44.2314,
  lon: 33.4417,
}); // Mis Sarych

export const latDiff = northPoint.lat - southPoint.lat;

export const lonDiff = eastPoint.lon - westPoint.lon;
