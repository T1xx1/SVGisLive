import App from './app/_index.svelte';

import './assets/styles/index.scss';

const app = new App({
   target: document.querySelector('#app'),
});

export default app;
