
import styles from './KiwiImg.module.scss';
import kiwi from './kiwi.png';

class KiwiImg {
    render () {
        const img = document.createElement('img');
        img.src=kiwi;
        img.alt='kiwi';
        img.classList.add(styles.img);
        const body = document.querySelector('body');
        body.appendChild(img)
    }
}
export default KiwiImg;
