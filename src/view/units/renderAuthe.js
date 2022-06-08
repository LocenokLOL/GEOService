const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend',
};

const contentContainer = document.querySelector('content');
const auth =  '                      <div class="shadow-box"></div>'+
  '        <div class="reg-container reg-container-auth updatableLink">\n' +
  '            <a href="#"><i class="fa-solid fa-xmark"></i></a>\n' +
  '            <div class="form-fields">\n' +
  '                <i class="fa-solid fa-user"></i>\n' +
  '                <div class="form-field">\n' +
  '                    <input type="text" placeholder="Логин" class="wrapper">\n' +
  '                </div>\n' +
  '                <i class="fa-solid fa-envelope"></i>\n' +
  '                <div class="form-field">\n' +
  '                    <input type="text" placeholder="Эл. почта" class="wrapper">\n' +
  '                </div>\n' +
  '                <i class="fa-solid fa-lock"></i>\n' +
  '                <div class="form-field">\n' +
  '                    <input type="text" placeholder="Пароль">\n' +
  '                </div>\n' +
  '            </div>\n' +
  '            <div class="form-buttons">\n' +
  '                <button class="button">ВХОД</button>\n' +
  '                <div class="divinder">или</div>\n' +
  '                <a href="#" class="button btn-google">Google</a>\n' +
  '            </div>\n' +
  '       </div>';

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const renderAuthe = () => {
  if (document.querySelector('.reg-container') === null){
    renderTemplate(contentContainer, auth, RenderPosition.AFTEREND);
  }
};
