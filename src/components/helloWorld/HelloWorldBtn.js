import styles from './helloWorld.module.scss';


class HelloWorldButton {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        button.classList.add(styles.button);
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'me me me';
            p.classList.add(styles.text);
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;