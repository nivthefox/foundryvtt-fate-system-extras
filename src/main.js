import {App} from './app/app.js';
import {tests} from './quench_tests.js';

function main(lifecycle) {
    lifecycle.once('quenchReady', tests);
    lifecycle.once('init', () => new App(lifecycle));
}
main(window.Hooks);
