import HelloWorldBtn from './components/helloWorld/HelloWorldBtn';
import Heading from './components/heading/heading.js';
import React from 'react';


const helloBtn = new HelloWorldBtn();
const helloHeading = new Heading();
helloBtn.render();
helloHeading.render("bBottun");


