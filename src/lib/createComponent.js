import { isElementExist } from '../utils/helpers/isElementExist';
import { addAttributes, appendChild } from './dom';

export const createComponent = ({ elementType, child, attributes = {} }) => {
  if (!isElementExist(elementType)) {
    throw new Error("This type of element doesn't exist");
  }

  const element = document.createElement(elementType);

  if (child) {
    appendChild(element, child);
  }

  addAttributes(element, attributes);

  return element;
};
