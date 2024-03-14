export const createElement = (tagName, classNames, text) => {
    const element = document.createElement(tagName);
    element.classList.add(classNames);
    element.textContent = text;
    return element;
};
  