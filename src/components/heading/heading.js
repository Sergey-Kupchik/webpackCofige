import styles from './heading.module.scss';

class Heading {

    render () {
        const h1 = document.createElement('h1');
        h1.classList.add(styles.titel);
        const body = document.querySelector('body');
        h1.innerHTML = "Webpach in awsome";
        body.appendChild(h1)
    }
}

export default Heading;;
