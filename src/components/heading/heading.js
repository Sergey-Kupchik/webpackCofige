import styles from './heading.module.scss';

class Heading {

    render (pageName) {
        const h1 = document.createElement('h1');
        h1.classList.add(styles.titel);
        const body = document.querySelector('body');
        h1.innerHTML =  `Webpach in awsome on ${pageName} page`;
        body.appendChild(h1)
    }
}

export default Heading;;
