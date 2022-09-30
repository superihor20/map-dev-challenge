import { elementTypes } from '../constants/elementTypes';

export const isElementExist = (elementType) => {
  return typeof elementType === 'string' && elementType in elementTypes;
};
