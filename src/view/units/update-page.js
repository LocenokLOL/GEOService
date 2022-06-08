import {deleteFunction} from './delete-content';

export const updatePage=(tag, render) => {
  tag.addEventListener('click', (evt) => {
    evt.preventDefault();
    deleteFunction();
    render();
    const shadowBox= document.querySelector('.shadow-box');
    if (shadowBox !== null){
      document.querySelector('.shadow-box').remove();
      document.querySelector('.reg-container').remove();
    }
  });
};
