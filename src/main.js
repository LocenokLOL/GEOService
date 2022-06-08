import {renderMain} from './view/index-main';
import {renderServices} from './view/index-services';
import {renderMap} from './view/index-map';
import {updatePage} from './view/units/update-page';
import {renderAuthetication} from './view/auth';
import {renderAuthe} from './view/units/renderAuthe';
import {deleteFunction} from './view/units/delete-content';

const servicesTag = document.querySelector('.services-button');
const mapTag = document.querySelector('.map-button');
const mainTag = document.querySelector('.main-button');
const mainTagBottom = document.querySelector('li a.main-button');
const mapTagBottom = document.querySelector('li a.map-button');
const servicesTagBottom = document.querySelector('li a.services-button');
const accountTag= document.querySelector('.account');
const accountTagBottom =document.querySelector('li a.account');


renderMain();
updatePage(mapTag,renderMap);
updatePage(mainTag,renderMain);
updatePage(servicesTag,renderServices);
updatePage(servicesTagBottom,renderServices);
updatePage(mainTagBottom,renderMain);
updatePage(mapTagBottom,renderMap);
/*updatePage(accountTag,renderAuthetication);
updatePage(accountTagBottom,renderAuthetication);*/
accountTag.addEventListener('click',(evt) =>{
  evt.preventDefault();
  renderAuthe();
  const xMark =document.querySelector('.fa-xmark');
  const shadowBox = document.querySelector('.shadow-box');
  shadowBox.addEventListener('click',() =>{
    if (shadowBox !== null) {
      document.querySelector('.shadow-box').remove();
      document.querySelector('.reg-container').remove();
    }
  });
  xMark.addEventListener('click',(evt1) =>{
    evt1.preventDefault();
    document.querySelector('.reg-container').remove();
    document.querySelector('.shadow-box').remove();
  });
} );
accountTagBottom.addEventListener('click',(evt) =>{
  evt.preventDefault();
  renderAuthe();
  const xMark = document.querySelector('.fa-xmark');
  const shadowBox = document.querySelector('.shadow-box');
  shadowBox.addEventListener('click',() =>{
    if (shadowBox !== null) {
      document.querySelector('.shadow-box').remove();
      document.querySelector('.reg-container').remove();
    }
  });
  xMark.addEventListener('click',(evt1) =>{
    evt1.preventDefault();
    document.querySelector('.shadow-box').remove();
    document.querySelector('.reg-container').remove();
  });
} );

