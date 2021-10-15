import HelloWorldBtn from './HelloWorldBtn.js';
import Heading from './heading/heading.js';

const helloBtn = new HelloWorldBtn();
const helloHeading = new Heading();
helloBtn.render();
helloHeading.render();


if (process.env.NODE_ENV === "production"){
    alert("production mode")
} else if (process.env.NODE_ENV === "development"){
    alert("development mode")
} else if (process.env.NODE_ENV === "none"){
    alert("none mode")
}

