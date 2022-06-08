import {renderFunc} from './units/render';

const link = '<link rel="stylesheet" type="text/css" href="./css/contentmap.css" class="updatableLink">';
const content = '<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=60.62530517578126%2C56.83777599238421%2C60.66822052001954%2C56.85291442389756&amp;layer=mapnik"></iframe>\n' +
  '        </iframe>';

export const renderMap=()=>{
  renderFunc(content,link);
};

