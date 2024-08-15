import {App} from './app/app.js';
import {title, version} from '../module.json';

(function main() {
    Hooks.once('init', async () => new App(title, version));
})();
