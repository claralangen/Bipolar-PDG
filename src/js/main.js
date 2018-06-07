import styles from '../styles/main.scss';
import home from '../node/home';

const styleEl = document.createElement('style');
styleEl.innerHTML = styles;
document.head.appendChild(styleEl);

home();