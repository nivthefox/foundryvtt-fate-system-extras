import {Logger, LogLevels} from "../internal/utils/Logger.js";
import {title, version} from '../../module.json';

export class App {
    lifecycle;
    logger;

    name;
    version;

    constructor(lifecycle) {
        this.lifecycle = lifecycle;

        this.name = title;
        this.version = version;
        this.logger = new Logger(this.name, LogLevels.Debug);

        this.lifecycle.once('ready', () => this.ready());
    }

    async ready() {
        this.logger.info('Version %s Ready', this.version);
    }
}
