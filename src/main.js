import {App} from './app/app.js';

function main(lifecycle) {
    lifecycle.once('init', () => new App(lifecycle));
}
main(window.Hooks);
