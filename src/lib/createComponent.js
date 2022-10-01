import { isElementExist } from '../utils/helpers/isElementExist';
import { addAttributes, appendChild } from './dom';

export const createComponent = ({
  elementType,
  child,
  attributes = {},
  events,
}) => {
  if (!isElementExist(elementType)) {
    throw new Error("This type of element doesn't exist");
  }

  const element = document.createElement(elementType);

  if (child) {
    appendChild(element, child);
  }

  addAttributes(element, attributes);

  if (events !== null && typeof events === 'object') {
    Object.entries(events).forEach(([event, cb]) => {
      element.addEventListener(event, cb);
    });
  }

  return element;
};
