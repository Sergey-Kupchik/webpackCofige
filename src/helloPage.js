import HelloWorldBtn from './components/helloWorld/HelloWorldBtn';
import Heading from './components/heading/heading.js';
import _ from 'lodash';

const helloBtn = new HelloWorldBtn();
const helloHeading = new Heading();
helloBtn.render();
helloHeading.render(_.upperFirst("bBottun"));


