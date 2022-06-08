import {renderAuthe} from './units/renderAuthe';

const link='<link rel="stylesheet" type="text/css" href="./css/reg.css" class="updatableLink">';
const content =
  '        <div class="reg-container reg-container-auth">\n' +
  '           <div class="shadow-box"> хуй</div>                                  '+
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

export const renderAuthetication=()=>{
  renderAuthe(content, link);
};
