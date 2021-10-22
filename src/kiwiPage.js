
import KiwiImg from './components/kiwiImg/kiwiImg';
import Heading from './components/heading/heading.js';
import _ from 'lodash';


const helloHeading = new Heading();
const img = new KiwiImg();

helloHeading.render(_.upperFirst("kiWi"));
img.render();