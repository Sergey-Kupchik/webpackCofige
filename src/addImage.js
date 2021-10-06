import kiwi from "./kiwi.png"
import alttext from "./alttext.txt"


function addImage () {
    const img = document.createElement('img');
    img.alt = alttext;
    img.width = 300;
    img.src= kiwi;
    const body = document.querySelector('body');
    body.appendChild(img); 
}

export default addImage;