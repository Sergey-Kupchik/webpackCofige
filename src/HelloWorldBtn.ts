import styles from './helloWorld.module.scss';
// import styles from './Login.module.css';

class HelloWorldButton {

    someBtn = "styles.button"

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        button.classList.add(this.someBtn);
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