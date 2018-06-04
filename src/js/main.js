import styles from '../styles/main.scss';
import reunion from '../node/reunion.js';

const styleEl = document.createElement('style');
styleEl.innerHTML = styles;
document.head.appendChild(styleEl);

reunion();