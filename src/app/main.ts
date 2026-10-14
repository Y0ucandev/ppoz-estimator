import '../styles/main.scss';

import { bootstrap } from './bootstrap';

const root = document.querySelector<HTMLElement>('#app');

if (!root) {
  throw new Error('Missing #app root element in app.html');
}

bootstrap(root).catch(error => console.error('Application failed to start', error));
