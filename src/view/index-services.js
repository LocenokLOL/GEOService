import {renderFunc} from './units/render';
const content = '<div class="service bronze">\n' +
  '            <h1 class="name">Эконом</h1>\n' +
  '            <img src="./img/low.png" alt="oh, no..." class="picture">\n' +
  '            <h1 class="name price">1000 ₽</h1>\n' +
  '            <div class="about">\n' +
  '                <p>Эконом пакет, дающий доступ к базовой функциональности карты.</p>\n' +
  '                <div class="accordion" id="f-acc">\n' +
  '                    <span>Доступно:</span>\n' +
  '                    <ul>\n' +
  '                        <li><span class="dot">•</span><p class="about">Геоинтерфейс, позволяющий оценить эффективности точки для открытия бизнеса, основываясь на базовых фильтрах.</p></li>\n' +
  '                    </ul>\n' +
  '                    <a class="buy">Приобрести</a>\n' +
  '                </div>\n' +
  '            </div>\n' +
  '        </div>\n' +
  '        <div class="service silver">\n' +
  '            <h1 class="name">Стандарт</h1>\n' +
  '            <img src="./img/medium.png" alt="oh, no..." class="picture">\n' +
  '            <h1 class="name price">3000 ₽</h1>\n' +
  '            <div class="about">\n' +
  '                <p>Стандартный пакет, дающий доступ к расширенной функциональности карты.</p>\n' +
  '                <div class="accordion" id="s-acc">\n' +
  '                    <span>Доступно:</span>\n' +
  '                    <ul>\n' +
  '                        <li><span class="dot">•</span><p class="about">Геоинтерфейс, позволяющий оценить эффективности точки для открытия бизнеса, основываясь на расширенных фильтрах.</p></li>\n' +
  '                        <li><span class="dot">•</span><p class="about">Дополнительное количество фильтров, позволяющее более точно оценить эффективность точки .</p></li>\n' +
  '                    </ul>\n' +
  '                    <a class="buy">Приобрести</a>\n' +
  '                </div>\n' +
  '            </div>\n' +
  '        </div>\n' +
  '        <div class="service gold">\n' +
  '            <h1 class="name">Gold</h1>\n' +
  '            <img src="./img/full.png" alt="oh, no..." class="picture">\n' +
  '            <h1 class="name price">5000 ₽</h1>\n' +
  '            <div class="about">\n' +
  '                <p> Расширенный пакет, содержащий все продвинутые функции и дающий рекомендации на основе программного анализа нейронной сетью.</p>\n' +
  '                <div class="accordion" id="t-acc">\n' +
  '                    <span>Доступно:</span>\n' +
  '                    <ul>\n' +
  '                        <li><span class="dot">•</span><p class="about">Рекомендация конкретных точек для вашего бизнеса.</p></li>\n' +
  '                        <li><span class="dot">•</span><p class="about">Актуальнейшие данные, недоступные другим пакетам.</p></li>\n' +
  '                        <li><span class="dot">•</span><p class="about">Возможность теста нового функционала.</p></li>\n' +
  '                        <li><span class="dot">•</span><p class="about">Анализ данных на основе нейронной сети.</p></li>\n' +
  '                    </ul>\n' +
  '                    <a class="buy">Приобрести</a>\n' +
  '                </div>\n' +
  '            </div>\n' +
  '        </div>\n' +
  '        <div class="service business">\n' +
  '            <h1 class="name"></h1>\n' +
  '            <img src="./img/business.png" alt="oh, no..." class="picture">\n' +
  '            <h1 class="name price">2500 ₽</h1>\n' +
  '            <div class="about">\n' +
  '                <p>Позволяет оценить Ваше помещение для аренды на конкуретноспособность на рынке</p>\n' +
  '            </div>\n' +
  '            <a class="btn-about"><i class="fa-solid fa-cart-shopping" id="shop"></i></a>\n' +
  '            <a class="buy">Приобрести</a>\n' +
  '        </div>';
const link='';
export const renderServices=()=>{
  renderFunc(content, link);
};

