import { isValidChild } from '../utils/helpers/isValidChild';
import { isChildDomElement } from '../utils/helpers/isChildDomElement';

export const getElement = (selector) => {
  return document.querySelector(selector);
};

export const getElements = (selector) => {
  return document.querySelectorAll(selector);
};

export const appendChild = (domElement, child) => {
  if (isValidChild(child)) {
    domElement.innerHTML = child;

    return;
  }

  if (isChildDomElement(child)) {
    domElement.appendChild(child);

    return;
  }

  if (Array.isArray(child) && child.every(isChildDomElement)) {
    child.forEach((c) => {
      domElement.appendChild(c);
    });

    return;
  }

  throw new Error(
    'Incorect type of child, should string, number, DOM Element or Array of DOM elements.'
  );
};

export const addAttributes = (domElement, attributes) => {
  if (attributes === null || typeof attributes !== 'object') {
    throw new Error('Attributes should be an object');
  }

  Object.entries(attributes).forEach(([attributeName, attributeValue]) => {
    domElement.setAttribute(attributeName, attributeValue);
  });
};
